import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateloginComponent } from './corporatelogin.component';

describe('CorporateloginComponent', () => {
  let component: CorporateloginComponent;
  let fixture: ComponentFixture<CorporateloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
