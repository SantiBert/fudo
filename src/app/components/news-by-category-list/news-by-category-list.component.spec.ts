import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByCategoryListComponent } from './news-by-category-list.component';

describe('NewsByCategoryListComponent', () => {
  let component: NewsByCategoryListComponent;
  let fixture: ComponentFixture<NewsByCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsByCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsByCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
