package edu.unisinos.bemapi.domains.user.service.impl;

import edu.unisinos.bemapi.domains.user.entity.BankAccount;
import edu.unisinos.bemapi.domains.user.repository.IBankAccountRepository;
import edu.unisinos.bemapi.domains.user.service.IBankAccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class BankAccountService implements IBankAccountService {

    private final IBankAccountRepository bankAccountRepository;

    @Override
    public Page<BankAccount> findByCode(String code, Pageable pageable) {
        log.info("Service - findByCode - code - {} ", code);

        return bankAccountRepository.findByCode(code, pageable);
    }
}
