package edu.unisinos.bemapi.domains.proposal.service;

import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;

import java.util.List;

public interface IProposalPlanService {

    ProposalPlan findById(Long id);

    List<ProposalPlan> findAll();
}
