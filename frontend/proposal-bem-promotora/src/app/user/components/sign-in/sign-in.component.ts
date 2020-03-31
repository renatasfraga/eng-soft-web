import { Component, OnInit } from '@angular/core';
import { Oauth2ServerService } from '../../services/oauth2-server/oauth2-server.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/security/guards/auth-guard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserSignErrorComponent } from '../modals-snackbar/user-sign-error/user-sign-error.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formLogin: FormGroup;
  durationInSeconds: number = 10;
  hidePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authGuard: AuthGuardService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.maxLength(12)]]
    });
  }

  async login(): Promise<void> {
    const isAuth: boolean = await this.authGuard.login(
      this.formLogin.get('username').value,
      this.formLogin.get('password').value
    );

    if (isAuth) {
      this.router.navigate(['/proposals']);
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar(): void {
    this.snackBar.openFromComponent(UserSignErrorComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
}
