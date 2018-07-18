import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCallComponent } from './submit-call.component';

describe('SubmitCallComponent', () => {
  let component: SubmitCallComponent;
  let fixture: ComponentFixture<SubmitCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
