package edu.unisinos.bemapi.domains.proposal.api.mapper;

import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalListDTO;
import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalUpdateDTO;
import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper
public interface IProposalMapper {

    List<ProposalListDTO> toListDTO(List<Proposal> proposal);

    ProposalListDTO toDTO(Proposal proposal);

    void merge(@MappingTarget Proposal proposal, ProposalUpdateDTO proposalUpdateDTO);
}
