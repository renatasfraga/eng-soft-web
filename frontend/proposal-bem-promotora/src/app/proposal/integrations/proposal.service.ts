import { Injectable } from '@angular/core';
import { environment } from '../../../../src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProposalCreateDTO, ProposalListDTO, ProposalUpdateDTO, PageDTO } from '../dtos/proposal';
import { ProposalStatus } from '../enums/proposal.enums';
import { Observable } from 'rxjs';

@Injectable()
export class ProposalService {
  private readonly httpClient: HttpClient;
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.httpClient = http;
    this.url = environment.integrations.bemapi.url + 'proposals';
  }

  create(proposalDTO: ProposalCreateDTO): Observable<any> {
    let response: any;

    this.httpClient
      .post<ProposalCreateDTO>(this.url, proposalDTO, { observe: 'response' })
      .subscribe(resp => (response = resp));

    return response;
  }

  async update(id: number, proposalDTO: ProposalUpdateDTO): Promise<void> {
    const customUrl = this.url + '/' + id;
    try {
      await this.httpClient.patch(customUrl, proposalDTO).toPromise();
    } catch (error) {
      throw Error(`ProposalService: update -> error - ${error}`);
    }
  }

  async findByUUID(uuid: string): Promise<ProposalListDTO> {
    const customUrl = this.url + '/' + uuid;
    try {
      return new Promise(async () => {
        return await this.httpClient.get(customUrl).toPromise();
      });
    } catch (error) {
      throw Error(`ProposalService: findByUUID -> error - ${error}`);
    }
  }

  async findAll(status?: ProposalStatus, planId?: number, page?: number, size?: number): Promise<any> {
    const customUrl = this.url + '/list';
    const params: HttpParams = new HttpParams();

    if (status) params.set('status', status);
    if (planId) params.set('planId', planId.toString());
    if (page) params.set('page', page.toString());
    if (size) params.set('size', size.toString());

    const options: any = {
      params: params
    };

    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.httpClient.get<PageDTO>(customUrl, options).toPromise();
        resolve(data);
      } catch (error) {
        return reject();
      }
    });
  }
}
