import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProposalService } from '../../integrations/proposal.service';
import { PlanService } from '../../integrations/plan.service';
import { ProposalPlanListDTO, ClientListDTO, ProposalCreateDTO } from '../../dtos/proposal';
import { UserService } from '../../integrations/user.service';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  formProposal = new FormGroup({
    amount: new FormControl(),
    planId: new FormControl(),
    clientDocument: new FormControl()
  });

  planOptions: ProposalPlanListDTO[] = [];
  clientOptions: ClientListDTO[] = [];

  constructor(
    private proposalService: ProposalService,
    private planService: PlanService,
    private clientService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    this.planOptions = await this.planService.listAll();
    this.clientOptions = await this.clientService.listAll();
  }

  onFormSubmit(): void {
    this.proposalService.create({
      amount: this.formProposal.get('amount').value,
      clientDocument: this.formProposal.get('clientDocument').value,
      planId: this.formProposal.get('planId').value
    });

    this.formProposal.reset();
  }
}
