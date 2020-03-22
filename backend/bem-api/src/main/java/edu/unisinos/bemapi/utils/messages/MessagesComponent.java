package edu.unisinos.bemapi.utils.messages;

import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.text.MessageFormat;

@RequiredArgsConstructor
@Lazy
@Component
public class MessagesComponent {

    private final MessageSource messageSource;

    private MessageSourceAccessor messageSourceAccessor;

    @PostConstruct
    private void init() {
        messageSourceAccessor = new MessageSourceAccessor(messageSource);
    }

    public String get(String code) {
        return messageSourceAccessor.getMessage(code);
    }

    public String getWithParams(String code, String... params) {
        return MessageFormat.format(messageSourceAccessor.getMessage(code), params);
    }
}
