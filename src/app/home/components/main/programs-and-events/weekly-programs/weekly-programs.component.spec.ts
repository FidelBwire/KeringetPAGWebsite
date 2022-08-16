import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyProgramsComponent } from './weekly-programs.component';

describe('WeeklyProgramsComponent', () => {
  let component: WeeklyProgramsComponent;
  let fixture: ComponentFixture<WeeklyProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
