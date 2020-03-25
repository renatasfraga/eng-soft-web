import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProposalPlanListDTO } from '../dtos/proposal';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly httpClient: HttpClient;
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.httpClient = http;
    this.url = environment.integrations.bemapi.url + 'proposalplans';
  }

  listAll(): Promise<any> {
    const customUrl = this.url + '/list';

    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.httpClient.get<ProposalPlanListDTO[]>(customUrl).toPromise();
        resolve(data);
      } catch (error) {
        return reject();
      }
    });
  }
}
