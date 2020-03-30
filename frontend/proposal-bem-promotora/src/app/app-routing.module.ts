import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProposalComponent } from './proposal/components/list-proposal/list-proposal.component';
import { CreateProposalComponent } from './proposal/components/create-proposal/create-proposal.component';
import { EditProposalComponent } from './proposal/components/edit-proposal/edit-proposal.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { AuthGuardService } from './security/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'proposals',
    component: ListProposalComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'proposals/new', component: CreateProposalComponent, canActivate: [AuthGuardService] },
  { path: 'proposals/edit/:id', component: EditProposalComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
