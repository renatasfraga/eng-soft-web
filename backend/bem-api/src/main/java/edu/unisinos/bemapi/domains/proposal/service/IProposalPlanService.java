package edu.unisinos.bemapi.domains.proposal.service;

import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;

public interface IProposalPlanService {

    ProposalPlan findById(Long id);
}
