import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProposalComponent } from './list-proposal.component';

describe('ListProposalComponent', () => {
  let component: ListProposalComponent;
  let fixture: ComponentFixture<ListProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
