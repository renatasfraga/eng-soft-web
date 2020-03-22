package edu.unisinos.bemapi.domains.proposal.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Getter
@Setter
@ToString
public class ProposalCreateDTO {


    @Digits(
            integer = 17,
            fraction = 2
    )
    @NotNull
    private BigDecimal amount;

    @NotNull
    private Long planId;

    @Size(
            min = 11,
            max = 14
    )
    @NotBlank
    private String clientDocument;

}