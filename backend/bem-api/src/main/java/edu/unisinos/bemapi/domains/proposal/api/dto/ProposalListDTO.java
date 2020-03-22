package edu.unisinos.bemapi.domains.proposal.api.dto;

import edu.unisinos.bemapi.domains.contract.api.dto.ContractListDTO;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Getter
@Setter
@ToString
public class ProposalListDTO {

    private String uuid;

    private BigDecimal amount;

    private ProposalStatusEnum statusEnum;

    private ProposalPlanListDTO plan;

    private ContractListDTO contract;

}
