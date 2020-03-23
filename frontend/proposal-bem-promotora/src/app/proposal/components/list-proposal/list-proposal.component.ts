import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../../integrations/proposal.service';
import { ProposalListDTO, PageDTO } from '../../dtos/proposal';
import { ProposalStatus } from '../../enums/proposal.enums';

export interface ProposalDisplay {
  uuid: string;
  amount: number;
  status: string;
  planName: string;
}

@Component({
  selector: 'app-list-proposal',
  templateUrl: './list-proposal.component.html',
  styleUrls: ['./list-proposal.component.css']
})
export class ListProposalComponent implements OnInit {
  readonly service: ProposalService;
  readonly displayColumns: string[] = ['id', 'amount', 'status', 'plan', 'edit'];

  proposals: ProposalDisplay[] = [];

  page: PageDTO;

  constructor(proposalService: ProposalService) {
    this.service = proposalService;
  }

  async ngOnInit(): Promise<void> {
    this.proposals = await this.list(null, null, 0, 5);
  }

  async list(status?: ProposalStatus, planId?: number, page?: number, size?: number): Promise<ProposalDisplay[]> {
    this.page = await this.service.findAll(status, planId, page, size);

    let proposalDisplayList: ProposalDisplay[] = [];
    this.page.content.forEach((proposal: ProposalListDTO) => {
      proposalDisplayList.push({
        uuid: proposal.uuid,
        amount: proposal.amount,
        status: proposal.statusEnum,
        planName: proposal.plan.name
      });
    });

    return proposalDisplayList;
  }
}
