package edu.unisinos.bemapi.domains.user.service.impl;

import edu.unisinos.bemapi.domains.user.entity.User;
import edu.unisinos.bemapi.domains.user.repository.IUserRepository;
import edu.unisinos.bemapi.domains.user.service.IUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;

    @Override
    public User findByDocument(String document) {
        log.info("Service - findByDocument - {}", document);

        return userRepository.findByDocument(document).orElseThrow();
    }
}
