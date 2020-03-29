import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProposalComponent } from './proposal/components/list-proposal/list-proposal.component';
import { CreateProposalComponent } from './proposal/components/create-proposal/create-proposal.component';
import { EditProposalComponent } from './proposal/components/edit-proposal/edit-proposal.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { CreateUserComponent } from './user/components/create-user/create-user.component';

const routes: Routes = [
  {
    path: 'proposals',
    component: ListProposalComponent
  },
  { path: 'proposals/new', component: CreateProposalComponent },
  { path: 'proposals/edit/:id', component: EditProposalComponent },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
