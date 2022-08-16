import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesCarouselComponent } from './verses-carousel.component';

describe('VersesCarouselComponent', () => {
  let component: VersesCarouselComponent;
  let fixture: ComponentFixture<VersesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
