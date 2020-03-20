package edu.unisinos.bemapi.utils.error.handler.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Singular;
import lombok.ToString;

import java.util.Set;

@Builder
@AllArgsConstructor
@ToString
public class ConstraintViolationDTO {

    private Long timestamp;
    private Integer status;
    private String error;
    private String exception;
    private String path;

    @Singular
    private Set<SubErrorDTO> subErrors;

}
