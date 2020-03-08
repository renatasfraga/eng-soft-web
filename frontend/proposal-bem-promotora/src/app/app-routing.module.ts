import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProposalComponent } from './proposal/components/list-proposal/list-proposal.component';
import { CreateProposalComponent } from './proposal/components/create-proposal/create-proposal.component';
import { EditProposalComponent } from './proposal/components/edit-proposal/edit-proposal.component';

const routes: Routes = [
  {
    path: 'proposals',
    component: ListProposalComponent,
    children: [
      { path: 'new', component: CreateProposalComponent },
      { path: 'edit/:id', component: EditProposalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
