import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalCreateSuccessComponent } from './proposal-create-success.component';

describe('ProposalCreateSuccessComponent', () => {
  let component: ProposalCreateSuccessComponent;
  let fixture: ComponentFixture<ProposalCreateSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalCreateSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
