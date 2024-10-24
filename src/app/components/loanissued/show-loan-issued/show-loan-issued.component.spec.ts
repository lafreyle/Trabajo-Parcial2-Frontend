import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanIssuedComponent } from './show-loan-issued.component';

describe('ShowLoanIssuedComponent', () => {
  let component: ShowLoanIssuedComponent;
  let fixture: ComponentFixture<ShowLoanIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLoanIssuedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoanIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
