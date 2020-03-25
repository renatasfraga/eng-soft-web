package edu.unisinos.bemapi.domains.user.repository;

import edu.unisinos.bemapi.domains.user.entity.Client;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface IClientRepository extends PagingAndSortingRepository<Client, Long> {

    Optional<Client> findByDocument(String document);

    List<Client> findAll();
}
