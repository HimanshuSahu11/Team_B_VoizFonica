import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotverificationComponent } from './forgotverification.component';

describe('ForgotverificationComponent', () => {
  let component: ForgotverificationComponent;
  let fixture: ComponentFixture<ForgotverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
