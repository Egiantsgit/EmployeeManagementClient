import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpsTodayComponent } from './follow-ups-today.component';

describe('FollowUpsTodayComponent', () => {
  let component: FollowUpsTodayComponent;
  let fixture: ComponentFixture<FollowUpsTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpsTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpsTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
