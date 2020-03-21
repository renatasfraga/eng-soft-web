package edu.unisinos.bemapi.domains.user.service;

import edu.unisinos.bemapi.domains.user.entity.Client;

public interface IClientService {

    Client findByDocument(String document);

}
