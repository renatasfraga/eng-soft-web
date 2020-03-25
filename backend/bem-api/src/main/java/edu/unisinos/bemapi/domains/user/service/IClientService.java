package edu.unisinos.bemapi.domains.user.service;

import edu.unisinos.bemapi.domains.user.entity.Client;

import java.util.List;

public interface IClientService {

    Client findByDocument(String document);

    List<Client> findAll();

}
