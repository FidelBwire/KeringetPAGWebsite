import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {

  @Input() fullPageDisplay: boolean = true;
  sermons = [];

  constructor() { }

  ngOnInit(): void {
  }

}
