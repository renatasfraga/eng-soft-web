package edu.unisinos.bemapi.domains.proposal.service.impl;

import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import edu.unisinos.bemapi.domains.proposal.exception.ProposalNotFoundException;
import edu.unisinos.bemapi.domains.proposal.exception.ProposalValidationException;
import edu.unisinos.bemapi.domains.proposal.repository.IProposalRepository;
import edu.unisinos.bemapi.domains.proposal.service.IProposalPlanService;
import edu.unisinos.bemapi.domains.proposal.service.IProposalService;
import edu.unisinos.bemapi.domains.user.service.IClientService;
import edu.unisinos.bemapi.utils.error.NoContentException;
import edu.unisinos.bemapi.utils.messages.MessagesComponent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class ProposalService implements IProposalService {

    private final IProposalRepository proposalRepository;

    private final IProposalPlanService proposalPlanService;
    private final IClientService clientService;

    private final MessagesComponent messages;

    @Override
    public Proposal create(Proposal proposal) {
        log.info("Service - create");

        proposal.setUuid(UUID.randomUUID().toString());
        proposal.setStatus(ProposalStatusEnum.AUT_RULE_WAIT.getValue());
        proposal.setProposalPlan(proposalPlanService.findById(proposal.getProposalPlan().getId()));

        validadeAmount(proposal.getProposalPlan(), proposal.getAmount());

        proposal.setClient(clientService.findByDocument(proposal.getClient().getDocument()));

        return proposalRepository.save(proposal);
    }

    @Override
    public void update(Proposal proposal) {
        log.info("Service - update");

        validadeAmount(proposal.getProposalPlan(), proposal.getAmount());

        proposalRepository.save(proposal);
    }

    @Override
    public Proposal findByUUID(String uuid) {
        log.info("Service - findByUUID - {}", uuid);

        return proposalRepository.findByUuid(uuid).orElseThrow(() ->
                new NoContentException(messages.get("exception.resource.notfound")));
    }

    @Override
    public Proposal findById(Long id) {
        log.info("Service - findById - {}", id);

        return proposalRepository.findById(id).orElseThrow(() ->
                new ProposalNotFoundException(messages.get("exception.resource.notfound")));
    }

    @Override
    public Page<Proposal> list(Long proposalPlanId, ProposalStatusEnum statusEnum, Pageable pageable) {
        log.info("Service - list");
        Proposal proposal = new Proposal();

        if (proposalPlanId != null)
            proposal.setProposalPlan(proposalPlanService.findById(proposalPlanId));

        if (statusEnum != null)
            proposal.setStatus(statusEnum.getValue());

        return proposalRepository.findAll(Example.of(proposal), pageable);
    }

    private void validadeAmount(ProposalPlan proposalPlan, BigDecimal amount) {
        if (amount.compareTo(proposalPlan.getMinAmount()) < 0 ||
                amount.compareTo(proposalPlan.getMaxAmount()) > 0) {
            throw new ProposalValidationException(
                    messages.getWithParams("exception.proposal.plan.amount.validation",
                            proposalPlan.getMinAmount().toString(), proposalPlan.getMaxAmount().toString()));
        }
    }
}