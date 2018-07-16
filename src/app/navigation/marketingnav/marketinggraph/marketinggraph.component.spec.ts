import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketinggraphComponent } from './marketinggraph.component';

describe('MarketinggraphComponent', () => {
  let component: MarketinggraphComponent;
  let fixture: ComponentFixture<MarketinggraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketinggraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketinggraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
