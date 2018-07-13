import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClientPageComponent } from './search-client-page.component';

describe('SearchClientPageComponent', () => {
  let component: SearchClientPageComponent;
  let fixture: ComponentFixture<SearchClientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
