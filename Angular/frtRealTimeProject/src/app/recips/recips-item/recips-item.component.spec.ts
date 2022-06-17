import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipsItemComponent } from './recips-item.component';

describe('RecipsItemComponent', () => {
  let component: RecipsItemComponent;
  let fixture: ComponentFixture<RecipsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
