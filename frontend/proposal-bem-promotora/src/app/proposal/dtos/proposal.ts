import { ProposalStatus } from '../enums/proposal.enums';

export class ProposalCreateDTO {
  amount: string;
  planId: string;
  clientDocument: string;
}

export interface ProposalUpdateDTO {
  amount: number;
  statusEnum: ProposalStatus;
}

export interface ProposalListDTO {
  uuid: string;
  amount: number;
  statusEnum: ProposalStatus;
  plan: ProposalPlanListDTO;
  contract: any;
}

export interface ProposalPlanListDTO {
  id: number;
  name: string;
  description: string;
}

export interface ClientListDTO {
  id: number;
  fullName: string;
  document: string;
}

export interface PageDTO {
  content: ProposalListDTO[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
