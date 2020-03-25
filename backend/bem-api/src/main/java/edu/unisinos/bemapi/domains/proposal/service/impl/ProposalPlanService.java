package edu.unisinos.bemapi.domains.proposal.service.impl;

import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import edu.unisinos.bemapi.domains.proposal.exception.ProposalPlanNotFoundException;
import edu.unisinos.bemapi.domains.proposal.repository.IProposalPlanRepository;
import edu.unisinos.bemapi.domains.proposal.service.IProposalPlanService;
import edu.unisinos.bemapi.utils.messages.MessagesComponent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class ProposalPlanService implements IProposalPlanService {

    private final IProposalPlanRepository proposalPlanRepository;

    private final MessagesComponent messages;

    @Override
    public ProposalPlan findById(Long id) {
        log.info("Service - findById - {} ", id);

        return proposalPlanRepository.findById(id).orElseThrow(() ->
                new ProposalPlanNotFoundException(messages.get("exception.resource.notfound")));
    }

    @Override
    public List<ProposalPlan> findAll() {
        log.info("Service - findAll");

        return proposalPlanRepository.findAll();
    }


}
