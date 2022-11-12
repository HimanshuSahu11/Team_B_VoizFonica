import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupbillComponent } from './popupbill.component';

describe('PopupbillComponent', () => {
  let component: PopupbillComponent;
  let fixture: ComponentFixture<PopupbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
