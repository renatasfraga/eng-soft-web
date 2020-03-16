package edu.unisinos.bemapi.domains.proposal.service.impl;

import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import edu.unisinos.bemapi.domains.proposal.repository.IProposalRepository;
import edu.unisinos.bemapi.domains.proposal.service.IProposalService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class ProposalService implements IProposalService {

    private final IProposalRepository proposalRepository;

    @Override
    public Proposal create(Proposal proposal) {
        log.info("Service - create");

        proposal.setUuid(UUID.randomUUID().toString());
        return proposalRepository.save(proposal);
    }

    @Override
    public void update(Proposal proposal) {
        log.info("Service - update");

        proposalRepository.save(proposal);
    }

    @Override
    public Proposal findByUUID(String uuid) {
        log.info("Service - findByUUID - {}", uuid);

        return proposalRepository.findByUuid(uuid).orElseThrow();
    }

    @Override
    public Page<Proposal> list(ProposalPlan proposalPlan, ProposalStatusEnum status, Pageable pageable) {
        log.info("Service - list");

        return proposalRepository.findByProposalPlanAndStatus(proposalPlan, status, pageable);
    }
}