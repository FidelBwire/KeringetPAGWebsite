import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verses-carousel',
  templateUrl: './verses-carousel.component.html',
  styleUrls: ['./verses-carousel.component.css']
})
export class VersesCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // config.interval = 10000;
    // config.wrap = true;
    // config.keyboard = false;
    // config.pauseOnHover = true;
    // config.pauseOnFocus = true;
  }

  ngOnInit(): void {
  }

}
