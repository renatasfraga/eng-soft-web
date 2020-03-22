package edu.unisinos.bemapi.domains.proposal.factory;

import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalCreateDTO;
import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import edu.unisinos.bemapi.domains.user.entity.Client;

public class ProposalFactory {
    public static Proposal create(ProposalCreateDTO dto) {
        return Proposal.builder()
                .amount(dto.getAmount())
                .proposalPlan(ProposalPlan.builder().id(dto.getPlanId()).build())
                .client(Client.builder().document(dto.getClientDocument()).build())
                .build();
    }
}
