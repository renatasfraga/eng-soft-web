package edu.unisinos.bemapi.domains.proposal.entity;

import edu.unisinos.bemapi.domains.contract.entity.Contract;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import edu.unisinos.bemapi.domains.user.entity.Client;
import edu.unisinos.bemapi.utils.entity.EntityDefault;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Proposal extends EntityDefault {

    @Column(unique = true)
    private String uuid;

    private BigDecimal amount;

    private Integer status;

    @ManyToOne
    @JoinColumn(name = "proposal_plan_id")
    private ProposalPlan proposalPlan;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToOne
    @JoinColumn(name = "contract_id")
    private Contract contract;

    @Transient
    private ProposalStatusEnum statusEnum;

    @PostLoad
    void fillTransient() {
        this.statusEnum = ProposalStatusEnum.of(status);
    }
}
