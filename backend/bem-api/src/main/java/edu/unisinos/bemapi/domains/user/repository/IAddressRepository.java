package edu.unisinos.bemapi.domains.user.repository;

import edu.unisinos.bemapi.domains.user.entity.Address;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IAddressRepository extends PagingAndSortingRepository<Address, Long> {
}
