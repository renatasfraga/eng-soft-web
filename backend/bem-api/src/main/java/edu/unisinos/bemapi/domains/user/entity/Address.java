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
public class Address extends EntityDefault {

    private boolean isMain;

    private String street;

    private String number;

    private Integer zipCode;

    private String neighborhood;

    private String city;

    private String state;

    private String complement;

}
