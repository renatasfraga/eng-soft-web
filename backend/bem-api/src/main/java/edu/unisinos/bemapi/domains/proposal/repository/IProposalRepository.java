package edu.unisinos.bemapi.domains.proposal.repository;

import com.sun.istack.Nullable;
import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface IProposalRepository extends PagingAndSortingRepository<Proposal, Long> {

    Optional<Proposal> findByUuid(String uuid);

    Page<Proposal> findByProposalPlanAndStatus(@Nullable ProposalPlan proposalPlan,
                                               @Nullable ProposalStatusEnum status, Pageable pageable);
}
