import { ProposalStatus } from '../enums/proposal.enums';

export interface ProposalCreateDTO {
  amount: number;
  planId: number;
  clientDocument: string;
}

export interface ProposalListDTO {
  uuid: string;
  amount: number;
  statusEnum: ProposalStatus;
  plan: ProposalPlanListDTO;
  contract: any;
}

export interface ProposalPlanListDTO {
  name: string;
  description: string;
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

/*{
    "pageable": {
        "sort": {
            "sorted": false,
            "unsorted": true,
            "empty": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 10,
        "paged": true,
        "unpaged": false
    },
    "totalElements": 1,
    "totalPages": 1,
    "last": true,
    "size": 10,
    "number": 0,
    "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
    },
    "first": true,
    "numberOfElements": 1,
    "empty": false
} */
