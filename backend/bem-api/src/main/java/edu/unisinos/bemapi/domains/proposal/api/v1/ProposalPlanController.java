package edu.unisinos.bemapi.domains.proposal.api.v1;

import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalPlanListDTO;
import edu.unisinos.bemapi.domains.proposal.api.mapper.IProposalMapper;
import edu.unisinos.bemapi.domains.proposal.service.IProposalPlanService;
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
@RequestMapping(path = "/v1/proposalplans")
@RequiredArgsConstructor
public class ProposalPlanController {

    private final IProposalPlanService proposalPlanService;

    private final IProposalMapper proposalMapper;

    @GetMapping(value = "/list")
    public ResponseEntity<Object> list() {
        log.info("Controller - list");

        List<ProposalPlanListDTO> listDTO = proposalMapper.toListProposalPlanDTO(proposalPlanService.findAll());

        log.info("Controller - list -> response: HttpStatus - {}", HttpStatus.OK);
        return ResponseEntity.ok(listDTO);
    }

}
