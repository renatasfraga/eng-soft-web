import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientListDTO } from '../dtos/proposal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly httpClient: HttpClient;
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.httpClient = http;
    this.url = environment.integrations.bemapi.url + 'clients';
  }

  listAll(): Promise<any> {
    const customUrl = this.url + '/list';

    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.httpClient.get<ClientListDTO[]>(customUrl).toPromise();
        resolve(data);
      } catch (error) {
        return reject();
      }
    });
  }
}
