package edu.unisinos.bemapi.domains.proposal.exception;

import edu.unisinos.bemapi.utils.error.BusinessException;

public class ProposalPlanNotFoundException extends BusinessException {

    public ProposalPlanNotFoundException(String message) {
        super(message);
    }
}
