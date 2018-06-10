/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendorSheetComponent } from './vendor-sheet.component';

describe('VendorSheetComponent', () => {
  let component: VendorSheetComponent;
  let fixture: ComponentFixture<VendorSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
