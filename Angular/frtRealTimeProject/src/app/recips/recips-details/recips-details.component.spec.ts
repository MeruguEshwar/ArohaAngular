import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipsDetailsComponent } from './recips-details.component';

describe('RecipsDetailsComponent', () => {
  let component: RecipsDetailsComponent;
  let fixture: ComponentFixture<RecipsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
