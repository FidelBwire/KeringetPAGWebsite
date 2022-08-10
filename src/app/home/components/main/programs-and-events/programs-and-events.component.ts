import { Component, Input, OnInit } from '@angular/core';
import { ChurchEvent } from 'src/app/model/ChurchEvent';

@Component({
  selector: 'app-programs-and-events',
  templateUrl: './programs-and-events.component.html',
  styleUrls: ['./programs-and-events.component.css']
})
export class ProgramsAndEventsComponent implements OnInit {

  @Input() fullPageDisplay: boolean = true;

  events: ChurchEvent[] = [];
  weeklytimeSchedules = new Map();

  constructor() { }

  ngOnInit(): void {
    this.initializeWeeklytimeSchedules();
    this.initializeEvents();
  }

  initializeWeeklytimeSchedules() {
    this.weeklytimeSchedules.set("Monday", "9:00 - 17:00");
    this.weeklytimeSchedules.set("Tuesday", "9:00 - 17:00");
    this.weeklytimeSchedules.set("Wednesday", "9:00 - 17:00");
    this.weeklytimeSchedules.set("Thursday", "9:00 - 17:00");
    this.weeklytimeSchedules.set("Friday", "9:00 - 17:00");
    this.weeklytimeSchedules.set("Saturday", "9:00 - 17:00");
    this.weeklytimeSchedules.set("Sunday", "9:00 - 17:00");
  }

  initializeEvents() {
    this.events.push(new ChurchEvent("Christmas Holidays", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae voluptate sapiente aliquid, laudantium alias atque quibusdam! Provident, pariatur? Nobis assumenda accusamus beatae sapiente totam inventore iste fugit explicabo quibusdam! Provident, pariatur? Nobis assumenda accusamus beatae sapiente totam inventore iste fugit explicabo  quibusdam?", 0,
                        new Date(), "image1.jpg"));
    this.events.push(new ChurchEvent("Easter Holidays", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae voluptate sapiente", 0,
                        new Date(), "image1.jpg", "Jerusalem"));
    this.events.push(new ChurchEvent("Christmas Holidays", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae voluptate sapiente aliquid, laudantium alias atque quibusdam! Provident, pariatur? Nobis assumenda accusamus beatae sapiente totam inventore iste fugit explicabo quibusdam?", 0,
                        new Date(), "image1.jpg"));
  }

  getEvents(numberOfEvents: number = 3): ChurchEvent[] {
    return this.events;
  }

  // filterEvents(element)

  asIsOrder(a:any, b:any) {
    return 1;
  }

}
