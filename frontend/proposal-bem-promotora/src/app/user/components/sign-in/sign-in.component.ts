import { Component, OnInit } from '@angular/core';
import { Oauth2ServerService } from '../../services/oauth2-server/oauth2-server.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/security/guards/auth-guard.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formLogin = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  hidePassword: boolean = true;

  constructor(private router: Router, private authGuard: AuthGuardService) {}

  ngOnInit(): void {}

  async login(): Promise<void> {
    await this.authGuard.login(this.formLogin.get('username').value, this.formLogin.get('password').value);

    this.router.navigate(['/proposals']);
  }
}
