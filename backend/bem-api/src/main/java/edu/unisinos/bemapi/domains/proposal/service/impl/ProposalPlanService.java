package edu.unisinos.bemapi.domains.proposal.service.impl;

import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import edu.unisinos.bemapi.domains.proposal.repository.IProposalPlanRepository;
import edu.unisinos.bemapi.domains.proposal.service.IProposalPlan;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class ProposalPlanService implements IProposalPlan {

    private final IProposalPlanRepository proposalPlanRepository;

    @Override
    public ProposalPlan findById(Long id) {
        log.info("Service - findById - {} ", id);

        return proposalPlanRepository.findById(id).orElseThrow();
    }
}
