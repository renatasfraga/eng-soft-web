import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Oauth2ServerService } from './services/oauth2-server/oauth2-server.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { UserSignErrorComponent } from './components/modals-snackbar/user-sign-error/user-sign-error.component';

export function tokenGetter() {
  return localStorage.getItem('currentUser');
}

@NgModule({
  declarations: [SignInComponent, CreateUserComponent, UserSignErrorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [Oauth2ServerService, JwtHelperService],
  entryComponents: [UserSignErrorComponent]
})
export class UserModule {}
