package edu.unisinos.bemapi.domains.user.service.impl;

import edu.unisinos.bemapi.domains.user.entity.Client;
import edu.unisinos.bemapi.domains.user.repository.IClientRepository;
import edu.unisinos.bemapi.domains.user.service.IClientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class ClientService implements IClientService {

    private final IClientRepository userRepository;

    @Override
    public Client findByDocument(String document) {
        log.info("Service - findByDocument - {}", document);

        return userRepository.findByDocument(document).orElseThrow();
    }
}
