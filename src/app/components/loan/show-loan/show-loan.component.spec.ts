import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanComponent } from './show-loan.component';

describe('ShowLoanComponent', () => {
  let component: ShowLoanComponent;
  let fixture: ComponentFixture<ShowLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
