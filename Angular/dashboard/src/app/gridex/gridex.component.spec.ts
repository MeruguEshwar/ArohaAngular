import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridexComponent } from './gridex.component';

describe('GridexComponent', () => {
  let component: GridexComponent;
  let fixture: ComponentFixture<GridexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
