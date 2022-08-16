import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/model/Program';

@Component({
  selector: 'app-weekly-programs',
  templateUrl: './weekly-programs.component.html',
  styleUrls: ['./weekly-programs.component.css']
})
export class WeeklyProgramsComponent implements OnInit {
  
  weeklyPrograms:Program[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeWeeklyPrograms();
  }

  initializeWeeklyPrograms() {
    this.weeklyPrograms.push(new Program("Good Morning Devotion", "Sunday", "6:00 am", "7:00 am"));
    this.weeklyPrograms.push(new Program("Sunday School", "Sunday", "9:00 am", "10:00 am"));
    this.weeklyPrograms.push(new Program("Main Service", "Sunday", "10:00 am", "12:30 pm"));
    this.weeklyPrograms.push(new Program("Bible Study and Deliverance Hour", "Sunday", "3:00 pm", "4:00 pm"));
    this.weeklyPrograms.push(new Program("Home Cell Fellowship", "Wednesday", "4:00 pm", ""));
    this.weeklyPrograms.push(new Program("All Night Kesha", "Friday", "", ""));
  }

}
