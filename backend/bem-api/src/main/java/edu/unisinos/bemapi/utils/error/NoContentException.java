package edu.unisinos.bemapi.utils.error;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Slf4j
@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class NoContentException extends RuntimeException {

    public NoContentException(String message) {
        super(message);
        log.error("NoContentException: message - {}", message);
    }
}
