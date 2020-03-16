package edu.unisinos.bemapi.domains.user.entity;

import edu.unisinos.bemapi.utils.entity.EntityDefault;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class BankAccount extends EntityDefault {

    private boolean isMain;

    private String code;

    private Integer agency;

    private Integer agencyDigit;

    private Integer account;

    private Integer accountDigit;

}
