package edu.unisinos.bemapi.domains.user.service;

import edu.unisinos.bemapi.domains.user.entity.User;

public interface IUserService {

    User findByDocument(String document);

}
