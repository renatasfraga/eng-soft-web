package edu.unisinos.bemapi.domains.proposal.entity;

import edu.unisinos.bemapi.domains.contract.entity.Contract;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import edu.unisinos.bemapi.utils.entity.EntityDefault;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Proposal extends EntityDefault {

    @Column(unique = true)
    private String uuid;

    private BigDecimal amount;

    @Enumerated(EnumType.ORDINAL)
    private ProposalStatusEnum status;

    @ManyToOne
    @JoinColumn(name = "proposal_plan_id")
    private ProposalPlan proposalPlan;

    @OneToOne
    @JoinColumn(name = "contract_id")
    private Contract contract;
}
