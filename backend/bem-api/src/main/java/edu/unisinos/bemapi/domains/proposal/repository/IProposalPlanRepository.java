package edu.unisinos.bemapi.domains.proposal.repository;

import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IProposalPlanRepository extends PagingAndSortingRepository<ProposalPlan, Long> {
}
