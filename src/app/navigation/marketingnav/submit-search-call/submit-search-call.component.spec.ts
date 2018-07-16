import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSearchCallComponent } from './submit-search-call.component';

describe('SubmitSearchCallComponent', () => {
  let component: SubmitSearchCallComponent;
  let fixture: ComponentFixture<SubmitSearchCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitSearchCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitSearchCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
