import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanTypeComponent } from './show-loan-type.component';

describe('ShowLoanTypeComponent', () => {
  let component: ShowLoanTypeComponent;
  let fixture: ComponentFixture<ShowLoanTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLoanTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
