import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignErrorComponent } from './user-sign-error.component';

describe('UserSignErrorComponent', () => {
  let component: UserSignErrorComponent;
  let fixture: ComponentFixture<UserSignErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
