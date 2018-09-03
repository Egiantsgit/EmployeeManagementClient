import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationDetailsComponent } from './immigration-details.component';

describe('ImmigrationDetailsComponent', () => {
  let component: ImmigrationDetailsComponent;
  let fixture: ComponentFixture<ImmigrationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmigrationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
