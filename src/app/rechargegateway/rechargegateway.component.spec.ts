import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargegatewayComponent } from './rechargegateway.component';

describe('RechargegatewayComponent', () => {
  let component: RechargegatewayComponent;
  let fixture: ComponentFixture<RechargegatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargegatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargegatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
