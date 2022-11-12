import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidcardComponent } from './postpaidcard.component';

describe('PostpaidcardComponent', () => {
  let component: PostpaidcardComponent;
  let fixture: ComponentFixture<PostpaidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpaidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
