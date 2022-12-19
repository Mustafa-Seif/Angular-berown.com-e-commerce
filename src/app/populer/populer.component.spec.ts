import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulerComponent } from './populer.component';

describe('PopulerComponent', () => {
  let component: PopulerComponent;
  let fixture: ComponentFixture<PopulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
