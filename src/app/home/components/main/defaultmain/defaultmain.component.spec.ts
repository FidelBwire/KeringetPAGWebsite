import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultmainComponent } from './defaultmain.component';

describe('DefaultmainComponent', () => {
  let component: DefaultmainComponent;
  let fixture: ComponentFixture<DefaultmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
