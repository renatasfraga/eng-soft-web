package edu.unisinos.bemapi.utils.error.handler.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.ToString;

@Builder
@AllArgsConstructor
@ToString
public class ErrorDTO {

    private Long timestamp;
    private Integer status;
    private String error;
    private String exception;
    private String path;
}
