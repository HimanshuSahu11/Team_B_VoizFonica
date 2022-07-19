import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortnumberComponent } from './portnumber.component';

describe('PortnumberComponent', () => {
  let component: PortnumberComponent;
  let fixture: ComponentFixture<PortnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortnumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
