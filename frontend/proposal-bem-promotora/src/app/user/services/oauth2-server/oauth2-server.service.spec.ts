import { TestBed } from '@angular/core/testing';

import { Oauth2ServerService } from './oauth2-server.service';

describe('Oauth2ServerService', () => {
  let service: Oauth2ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oauth2ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
