package edu.unisinos.bemapi.domains.user.api.v1;

import edu.unisinos.bemapi.domains.user.api.dto.ClientListDTO;
import edu.unisinos.bemapi.domains.user.api.mapper.IClientMapper;
import edu.unisinos.bemapi.domains.user.service.IClientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin()
@Slf4j
@RestController
@RequestMapping(path = "/v1/clients")
@RequiredArgsConstructor
public class ClientController {

    private final IClientService clientService;

    private final IClientMapper clientMapper;

    @GetMapping(value = "/list")
    public ResponseEntity<Object> list() {
        log.info("Controller - list");

        List<ClientListDTO> listDTO = clientMapper.toListDTO(clientService.findAll());

        log.info("Controller - list -> response: HttpStatus - {}", HttpStatus.OK);
        return ResponseEntity.ok(listDTO);
    }
}
