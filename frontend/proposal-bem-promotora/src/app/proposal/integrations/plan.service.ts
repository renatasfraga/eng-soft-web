import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProposalPlanListDTO } from '../dtos/proposal';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = environment.integrations.bemapi.url + 'proposalplans';
  }

  listAll(): Promise<any> {
    const customUrl = this.url + '/list';

    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.http.get<ProposalPlanListDTO[]>(customUrl).toPromise();
        resolve(data);
      } catch (error) {
        return reject();
      }
    });
  }
}
