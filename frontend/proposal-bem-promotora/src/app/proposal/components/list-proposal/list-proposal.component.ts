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
    this.proposals = await this.loadDisplay(null, null, 0, 5);
  }

  async loadDisplay(
    status?: ProposalStatus,
    planId?: number,
    page?: number,
    size?: number
  ): Promise<ProposalDisplay[]> {
    let listDisplay: ProposalDisplay[] = [];
    try {
      this.page = await this.service.findAll(status, planId, page, size);

      this.page.content.forEach(proposal => {
        listDisplay.push({
          uuid: proposal.uuid,
          amount: proposal.amount,
          status: proposal.statusEnum,
          planName: proposal.plan.name
        });
      });
    } catch (error) {
      console.error('Erro ao obter listagem');
    }

    return listDisplay;
  }
}
