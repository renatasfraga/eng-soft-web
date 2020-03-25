package edu.unisinos.bemapi.domains.proposal.repository;

import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface IProposalPlanRepository extends PagingAndSortingRepository<ProposalPlan, Long> {

    List<ProposalPlan> findAll();
}
