import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchBooksComponent } from './student-search-books.component';

describe('StudentSearchBooksComponent', () => {
  let component: StudentSearchBooksComponent;
  let fixture: ComponentFixture<StudentSearchBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSearchBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
