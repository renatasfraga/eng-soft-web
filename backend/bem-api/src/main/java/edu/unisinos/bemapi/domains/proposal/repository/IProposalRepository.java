package edu.unisinos.bemapi.domains.proposal.repository;

import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface IProposalRepository extends PagingAndSortingRepository<Proposal, Long> {

    Optional<Proposal> findByUuid(String uuid);

    Page<Proposal> findAll(Example<Proposal> of, Pageable pageable);
}
