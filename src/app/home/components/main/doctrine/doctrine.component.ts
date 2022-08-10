import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctrine',
  templateUrl: './doctrine.component.html',
  styleUrls: ['./doctrine.component.css']
})
export class DoctrineComponent implements OnInit {

  constructor() { }

  doctrines = new Map();

  ngOnInit(): void {
    this.doctrines.set("mission", "To preach the Gospel with signs following and establish self – propagating churches, which believe and obey the great commission. (Mathew 28: 16 – 20)");
    this.doctrines.set("vision", "To provide sound Christian teaching for all members and adherents who practice holiness and seek to be baptized in the Holy Spirit. (Hebrews 12: 14, Acts 1:8)");
    this.doctrines.set("values", "We are committed to nurturing in our Assemblies, ministries, organs and programs the values of Ministry, Leadership, and Community");
    this.doctrines.set("motto", "Serving the Nations with the Word..");
  }

  asIsOrder(a:any, b:any) {
    return 1;
  }

}
