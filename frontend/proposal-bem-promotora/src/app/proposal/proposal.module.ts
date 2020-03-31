import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProposalComponent } from './components/list-proposal/list-proposal.component';
import { CreateProposalComponent } from './components/create-proposal/create-proposal.component';
import { EditProposalComponent } from './components/edit-proposal/edit-proposal.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ProposalService } from './integrations/proposal.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProposalCreateSuccessComponent } from './components/modals-snackbar/proposal-create-success/proposal-create-success.component';
import { ProposalCreateErrorComponent } from './components/modals-snackbar/proposal-create-error/proposal-create-error.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NavbarComponent,
    ListProposalComponent,
    CreateProposalComponent,
    EditProposalComponent,
    ProposalCreateSuccessComponent,
    ProposalCreateErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [ProposalService],
  entryComponents: [ProposalCreateErrorComponent, ProposalCreateSuccessComponent]
})
export class ProposalModule {}
