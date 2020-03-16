package edu.unisinos.bemapi.domains.user.repository;

import edu.unisinos.bemapi.domains.user.entity.BankAccount;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IBankAccountRepository extends PagingAndSortingRepository<BankAccount, Long> {

    Page<BankAccount> findByCode(String code, Pageable pageable);
}
