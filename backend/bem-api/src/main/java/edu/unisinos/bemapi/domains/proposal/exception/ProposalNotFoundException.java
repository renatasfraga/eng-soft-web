package edu.unisinos.bemapi.domains.proposal.exception;

import edu.unisinos.bemapi.utils.error.BusinessException;

public class ProposalNotFoundException extends BusinessException {

    public ProposalNotFoundException(String message) {
        super(message);
    }
}
