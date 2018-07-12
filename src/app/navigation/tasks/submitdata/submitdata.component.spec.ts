import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitdataComponent } from './submitdata.component';

describe('SubmitdataComponent', () => {
  let component: SubmitdataComponent;
  let fixture: ComponentFixture<SubmitdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
