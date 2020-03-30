import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Oauth2ServerService } from 'src/app/user/services/oauth2-server/oauth2-server.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
  isActivate: boolean = false;
  accessToken: any;

  constructor(private router: Router, private oauth2Server: Oauth2ServerService, private jwtHelper: JwtHelperService) {}

  async login(username: string, password: string): Promise<any> {
    const resp = await this.oauth2Server.login(username, password);

    if (resp && resp.accessToken) {
      this.accessToken = resp;
      this.isActivate = true;
      localStorage.setItem('token', resp.accessToken);
    }
  }

  isAuthenticated(): boolean {
    const token: any = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/sign-in']);
      return false;
    }
    return true;
  }
}
