package edu.unisinos.bemapi.domains.contract.repository;

import edu.unisinos.bemapi.domains.contract.entity.Contract;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IContractRepository extends PagingAndSortingRepository<Contract, Long> {
}
