package edu.unisinos.bemapi.domains.proposal.entity;

import edu.unisinos.bemapi.utils.entity.EntityDefault;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@SuperBuilder
@Entity
public class ProposalPlan extends EntityDefault {

    private String name;

    private String description;

    private Integer installments;

    private BigDecimal interestRate;

    private BigDecimal minAmount;

    private BigDecimal maxAmount;

    private LocalDateTime startAt;

    private LocalDateTime endAt;

}
