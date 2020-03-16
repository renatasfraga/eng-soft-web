package edu.unisinos.bemapi.domains.user.service;

import edu.unisinos.bemapi.domains.user.entity.BankAccount;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBankAccountService {

    Page<BankAccount> findByCode(String code, Pageable pageable);
}
