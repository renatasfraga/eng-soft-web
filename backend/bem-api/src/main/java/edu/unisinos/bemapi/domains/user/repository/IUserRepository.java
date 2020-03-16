package edu.unisinos.bemapi.domains.user.repository;

import edu.unisinos.bemapi.domains.user.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface IUserRepository extends PagingAndSortingRepository<User, Long> {

    Optional<User> findByDocument(String document);
}
