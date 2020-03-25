package edu.unisinos.bemapi.domains.user.service.impl;

import edu.unisinos.bemapi.domains.user.entity.Client;
import edu.unisinos.bemapi.domains.user.exception.ClientNotFoundException;
import edu.unisinos.bemapi.domains.user.repository.IClientRepository;
import edu.unisinos.bemapi.domains.user.service.IClientService;
import edu.unisinos.bemapi.utils.messages.MessagesComponent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class ClientService implements IClientService {

    private final IClientRepository userRepository;

    private final MessagesComponent messages;

    @Override
    public Client findByDocument(String document) {
        log.info("Service - findByDocument - {}", document);

        return userRepository.findByDocument(document).orElseThrow(() ->
                new ClientNotFoundException(messages.get("exception.resource.notfound")));
    }

    @Override
    public List<Client> findAll() {
        log.info("Service - findAll");

        return userRepository.findAll();
    }
}
