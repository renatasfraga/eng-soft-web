package edu.unisinos.bemapi.domains.proposal.exception;

import edu.unisinos.bemapi.utils.error.BusinessException;

public class ProposalValidationException extends BusinessException {
    public ProposalValidationException(String message) {
        super(message);
    }
}
