package edu.unisinos.bemapi.domains.contract.entity;


import edu.unisinos.bemapi.utils.entity.EntityDefault;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;


@NoArgsConstructor
@Setter
@Getter
@Entity
public class Clause extends EntityDefault {

    private String title;

    private Long number;

    private String description;

    @ManyToOne
    private Contract contract;
}
