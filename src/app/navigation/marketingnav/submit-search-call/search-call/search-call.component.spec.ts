import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCallComponent } from './search-call.component';

describe('SearchCallComponent', () => {
  let component: SearchCallComponent;
  let fixture: ComponentFixture<SearchCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
