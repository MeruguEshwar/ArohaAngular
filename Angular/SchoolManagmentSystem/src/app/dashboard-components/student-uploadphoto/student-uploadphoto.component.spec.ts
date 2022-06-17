import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUploadphotoComponent } from './student-uploadphoto.component';

describe('StudentUploadphotoComponent', () => {
  let component: StudentUploadphotoComponent;
  let fixture: ComponentFixture<StudentUploadphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUploadphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUploadphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
