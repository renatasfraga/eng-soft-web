package edu.unisinos.bemapi.domains.proposal.enums;

public enum ProposalStatusEnum {

    AUT_RULE_WAIT(10),
    AUT_PEND(20),
    DOC_PEND(30),
    SENT_CONV(50),
    PAY_WAIT(60),
    REFUS_BPRO(21),
    REFUS_CONV(51),
    CANCELED(101);

    private int value;

    ProposalStatusEnum(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
