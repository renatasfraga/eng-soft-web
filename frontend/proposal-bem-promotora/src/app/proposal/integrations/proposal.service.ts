import { Injectable } from '@angular/core';
import { environment } from '../../../../src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProposalCreateDTO, ProposalListDTO } from '../dtos/proposal';
import { Observable } from 'rxjs';
import { ProposalStatus } from '../enums/proposal.enums';
import { rejects } from 'assert';
@Injectable()
export class ProposalService {
  private readonly httpClient: HttpClient;
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.httpClient = http;
    this.url = environment.integrations.bemapi.url + 'proposals';
  }

  async create(proposalDTO: ProposalCreateDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.httpClient.post(this.url, proposalDTO).toPromise();
    });
  }
}
