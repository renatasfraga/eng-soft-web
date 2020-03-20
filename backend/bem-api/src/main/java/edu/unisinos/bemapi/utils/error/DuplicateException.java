package edu.unisinos.bemapi.utils.error;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Slf4j
@ResponseStatus(HttpStatus.CONFLICT)
public class DuplicateException extends RuntimeException {

    public DuplicateException(String message) {
        super(message);
        log.error("DuplicateException: message - {}", message);
    }
}
