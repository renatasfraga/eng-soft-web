package edu.unisinos.bemapi.domains.proposal.api.dto;

import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Getter
@Setter
@ToString
public class ProposalUpdateDTO {

    private BigDecimal amount;

    private ProposalStatusEnum statusEnum;

}
