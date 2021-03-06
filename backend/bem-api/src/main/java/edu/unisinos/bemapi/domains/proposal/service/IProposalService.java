package edu.unisinos.bemapi.domains.proposal.service;

import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProposalService {

    Proposal create(Proposal proposal);

    void update(Proposal proposal);

    Proposal findByUUID(String uuid);

    Proposal findById(Long id);

    Page<Proposal> list(Long proposalPlanId, ProposalStatusEnum statusEnum, Pageable pageable);


}
