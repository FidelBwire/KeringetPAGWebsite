import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.css']
})
export class PagesTopComponent implements OnInit {

  @Input() pageTitle!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
