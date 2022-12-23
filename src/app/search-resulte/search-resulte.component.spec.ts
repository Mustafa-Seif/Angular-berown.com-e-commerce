import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResulteComponent } from './search-resulte.component';

describe('SearchResulteComponent', () => {
  let component: SearchResulteComponent;
  let fixture: ComponentFixture<SearchResulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResulteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
