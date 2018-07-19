/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RequestusComponent } from './requestus.component';

describe('RequestusComponent', () => {
  let component: RequestusComponent;
  let fixture: ComponentFixture<RequestusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
