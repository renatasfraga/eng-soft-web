package edu.unisinos.bemapi.domains.proposal.api.v1;

import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalCreateDTO;
import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalListDTO;
import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalUpdateDTO;
import edu.unisinos.bemapi.domains.proposal.api.mapper.IProposalMapper;
import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.enums.ProposalStatusEnum;
import edu.unisinos.bemapi.domains.proposal.factory.ProposalFactory;
import edu.unisinos.bemapi.domains.proposal.service.IProposalService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@CrossOrigin()
@Slf4j
@RestController
@RequestMapping(path = "/v1/proposals")
@RequiredArgsConstructor
public class ProposalController {

    private final IProposalService proposalService;

    private final IProposalMapper mapper;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> create(@Valid @RequestBody ProposalCreateDTO proposalDTO) {
        log.info("Controller - create -> params: proposalDTO - {}", proposalDTO);

        Proposal proposal = proposalService.create(ProposalFactory.create(proposalDTO));

        URI location = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/{id}")
                .buildAndExpand(proposal.getId())
                .toUri();

        log.info("Controller - create -> response: HttpStatus - {}", HttpStatus.CREATED);
        return ResponseEntity.created(location).build();
    }

    @GetMapping(value = "/list")
    public ResponseEntity<Object> list(@RequestParam(required = false) Long planId,
                                       @RequestParam(required = false) ProposalStatusEnum status,
                                       @RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "10") int size) {
        log.info("Controller - list -> params: page - {}, size - {}", page, size);

        Page<Proposal> entityPage = proposalService.list(planId, status, PageRequest.of(page, size));

        List<ProposalListDTO> listDTO = mapper.toListDTO(entityPage.getContent());

        Page<ProposalListDTO> dtoPage = new PageImpl<>(listDTO, PageRequest.of(page, size),
                entityPage.getTotalElements());

        log.info("Controller - list -> response: HttpStatus - {}", HttpStatus.OK);
        return ResponseEntity.ok(dtoPage);
    }

    @GetMapping(path = "/{uuid}")
    public ResponseEntity<Object> findByUUID(@PathVariable("uuid") String uuid) {
        log.info("Controller - findByUUID -> params: uuid - {}", uuid);

        ProposalListDTO proposalListDTO = mapper.toDTO(proposalService.findByUUID(uuid));

        log.info("Controller - list -> response: HttpStatus - {}", HttpStatus.OK);
        return ResponseEntity.ok(proposalListDTO);
    }

    @PatchMapping(path = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> update(@PathVariable("id") Long id,
                                         @Valid @RequestBody ProposalUpdateDTO proposalDTO) {
        log.info("Controller - update -> params: id - {}, proposalDTO - {}", id, proposalDTO);

        Proposal proposal = proposalService.findById(id);
        mapper.merge(proposal, proposalDTO);
        proposalService.update(proposal);

        log.info("Controller - update -> response: HttpStatus - {}", HttpStatus.NO_CONTENT);
        return ResponseEntity.noContent().build();
    }
}