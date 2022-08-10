import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsAndEventsComponent } from './programs-and-events.component';

describe('ProgramsAndEventsComponent', () => {
  let component: ProgramsAndEventsComponent;
  let fixture: ComponentFixture<ProgramsAndEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsAndEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
