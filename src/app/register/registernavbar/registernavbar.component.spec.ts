import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternavbarComponent } from './registernavbar.component';

describe('RegisternavbarComponent', () => {
  let component: RegisternavbarComponent;
  let fixture: ComponentFixture<RegisternavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisternavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
