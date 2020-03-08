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

@NgModule({
  declarations: [NavbarComponent, ListProposalComponent, CreateProposalComponent, EditProposalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class ProposalModule {}
