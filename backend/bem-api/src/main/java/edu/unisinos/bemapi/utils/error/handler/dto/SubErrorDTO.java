package edu.unisinos.bemapi.utils.error.handler.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.ToString;

@Builder
@AllArgsConstructor
@ToString
public class SubErrorDTO {

    private String object;
    private String field;
    private String rejectedValue;
    private String message;
}
