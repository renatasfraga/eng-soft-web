package edu.unisinos.bemapi.domains.contract.repository;

import edu.unisinos.bemapi.domains.contract.entity.Clause;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IClauseRepository extends PagingAndSortingRepository<Clause, Long> {
}
