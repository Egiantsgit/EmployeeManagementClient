import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorlExperienceComponent } from './worl-experience.component';

describe('WorlExperienceComponent', () => {
  let component: WorlExperienceComponent;
  let fixture: ComponentFixture<WorlExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorlExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorlExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
