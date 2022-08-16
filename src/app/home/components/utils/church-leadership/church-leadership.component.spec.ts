import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchLeadershipComponent } from './church-leadership.component';

describe('ChurchLeadershipComponent', () => {
  let component: ChurchLeadershipComponent;
  let fixture: ComponentFixture<ChurchLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
