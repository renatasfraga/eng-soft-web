import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProposalService } from '../../integrations/proposal.service';
import { PlanService } from '../../integrations/plan.service';
import { ProposalPlanListDTO, ClientListDTO, ProposalCreateDTO } from '../../dtos/proposal';
import { UserService } from '../../integrations/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProposalCreateSuccessComponent } from '../modals-snackbar/proposal-create-success/proposal-create-success.component';
import { ProposalCreateErrorComponent } from '../modals-snackbar/proposal-create-error/proposal-create-error.component';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  formProposal: FormGroup;
  durationInSeconds: number = 10;

  planOptions: ProposalPlanListDTO[] = [];
  clientOptions: ClientListDTO[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private proposalService: ProposalService,
    private planService: PlanService,
    private clientService: UserService,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit(): Promise<void> {
    this.formProposal = this.formBuilder.group({
      planId: [null, [Validators.required, Validators.maxLength(4)]],
      clientDocument: [null, [Validators.required, Validators.maxLength(14)]],
      amount: [null, [Validators.required, Validators.maxLength(19)]]
    });
    this.planOptions = await this.planService.listAll();
    this.clientOptions = await this.clientService.listAll();
  }

  async create(): Promise<void> {
    try {
      await this.proposalService.create({
        amount: this.formProposal.get('amount').value,
        clientDocument: this.formProposal.get('clientDocument').value,
        planId: this.formProposal.get('planId').value
      });
      this.openSuccessSnackBar();
    } catch (error) {
      this.openErrorSnackBar();
    }

    this.formProposal.reset();
  }

  openSuccessSnackBar(): void {
    this.snackBar.openFromComponent(ProposalCreateSuccessComponent, {
      duration: this.durationInSeconds * 1000
    });
  }

  openErrorSnackBar(): void {
    this.snackBar.openFromComponent(ProposalCreateErrorComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
}
