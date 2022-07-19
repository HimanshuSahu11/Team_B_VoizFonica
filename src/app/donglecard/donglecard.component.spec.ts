import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonglecardComponent } from './donglecard.component';

describe('DonglecardComponent', () => {
  let component: DonglecardComponent;
  let fixture: ComponentFixture<DonglecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonglecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
