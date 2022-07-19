import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateanaccountComponent } from './createanaccount.component';

describe('CreateanaccountComponent', () => {
  let component: CreateanaccountComponent;
  let fixture: ComponentFixture<CreateanaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateanaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateanaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
