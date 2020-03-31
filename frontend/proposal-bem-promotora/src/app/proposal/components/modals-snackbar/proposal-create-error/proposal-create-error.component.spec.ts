import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalCreateErrorComponent } from './proposal-create-error.component';

describe('ProposalCreateErrorComponent', () => {
  let component: ProposalCreateErrorComponent;
  let fixture: ComponentFixture<ProposalCreateErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalCreateErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalCreateErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
