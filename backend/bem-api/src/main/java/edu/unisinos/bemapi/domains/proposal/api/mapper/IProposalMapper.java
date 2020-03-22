package edu.unisinos.bemapi.domains.proposal.api.mapper;

import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalListDTO;
import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalPlanListDTO;
import edu.unisinos.bemapi.domains.proposal.api.dto.ProposalUpdateDTO;
import edu.unisinos.bemapi.domains.proposal.entity.Proposal;
import edu.unisinos.bemapi.domains.proposal.entity.ProposalPlan;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper
public interface IProposalMapper {

    List<ProposalListDTO> toListDTO(List<Proposal> proposal);

    @Mapping(source = "proposalPlan", target = "plan")
    ProposalListDTO toDTO(Proposal proposal);

    @Mapping(source = "statusEnum.value", target = "status")
    void merge(@MappingTarget Proposal proposal, ProposalUpdateDTO proposalUpdateDTO);

    ProposalPlanListDTO proposalPlanToDTO(ProposalPlan proposalPlan);

}
