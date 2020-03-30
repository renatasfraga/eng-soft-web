import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export interface OAuth2ClientDTO {
  acessToken: string;
}

@Injectable()
export class Oauth2ServerService {
  private readonly url: string = environment.integrations.oauth2Server.url;

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<any> {
    const customUrl = this.url + 'auth/openconnect';
    const body = new HttpParams().set('username', username).set('password', password);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return await this.http.post(customUrl, body.toString(), { headers }).toPromise();
  }
}
