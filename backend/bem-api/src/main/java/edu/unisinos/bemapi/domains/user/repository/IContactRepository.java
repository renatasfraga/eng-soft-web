package edu.unisinos.bemapi.domains.user.repository;

import edu.unisinos.bemapi.domains.user.entity.Contact;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IContactRepository extends PagingAndSortingRepository<Contact, Long> {
}
