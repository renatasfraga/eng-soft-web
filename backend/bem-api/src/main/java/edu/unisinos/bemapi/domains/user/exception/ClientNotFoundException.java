package edu.unisinos.bemapi.domains.user.exception;

import edu.unisinos.bemapi.utils.error.BusinessException;

public class ClientNotFoundException extends BusinessException {

    public ClientNotFoundException(String message) {
        super(message);
    }
}
