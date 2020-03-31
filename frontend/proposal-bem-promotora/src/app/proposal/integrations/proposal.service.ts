import { Injectable } from '@angular/core';
import { environment } from '../../../../src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProposalCreateDTO, ProposalListDTO, ProposalUpdateDTO, PageDTO } from '../dtos/proposal';
import { ProposalStatus } from '../enums/proposal.enums';
import { Observable } from 'rxjs';

@Injectable()
export class ProposalService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = environment.integrations.bemapi.url + 'proposals';
  }

  async create(proposalDTO: ProposalCreateDTO): Promise<any> {
    return await this.http.post<ProposalCreateDTO>(this.url, proposalDTO).toPromise();
  }

  async update(id: number, proposalDTO: ProposalUpdateDTO): Promise<void> {
    const customUrl = this.url + '/' + id;
    try {
      await this.http.patch(customUrl, proposalDTO).toPromise();
    } catch (error) {
      throw Error(`ProposalService: update -> error - ${error}`);
    }
  }

  async findByUUID(uuid: string): Promise<ProposalListDTO> {
    const customUrl = this.url + '/' + uuid;
    try {
      return new Promise(async () => {
        return await this.http.get(customUrl).toPromise();
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

    return await this.http
      .get<PageDTO>(customUrl, { params })
      .toPromise();
  }
}
