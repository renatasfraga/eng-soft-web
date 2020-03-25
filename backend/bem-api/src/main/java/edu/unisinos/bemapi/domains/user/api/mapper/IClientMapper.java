package edu.unisinos.bemapi.domains.user.api.mapper;

import edu.unisinos.bemapi.domains.user.api.dto.ClientListDTO;
import edu.unisinos.bemapi.domains.user.entity.Client;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface IClientMapper {

    List<ClientListDTO> toListDTO(List<Client> client);

}

