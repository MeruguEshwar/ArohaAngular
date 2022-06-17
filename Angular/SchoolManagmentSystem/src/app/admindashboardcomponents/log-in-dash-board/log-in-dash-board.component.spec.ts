import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInDashBoardComponent } from './log-in-dash-board.component';

describe('LogInDashBoardComponent', () => {
  let component: LogInDashBoardComponent;
  let fixture: ComponentFixture<LogInDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
