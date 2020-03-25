package edu.unisinos.bemapi.domains.user.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientListDTO {

    private String id;

    private String fullName;

    private String document;

}
