import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBlogComponent } from './our-blog.component';

describe('OurBlogComponent', () => {
  let component: OurBlogComponent;
  let fixture: ComponentFixture<OurBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
