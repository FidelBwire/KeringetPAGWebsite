import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beliefs',
  templateUrl: './beliefs.component.html',
  styleUrls: ['./beliefs.component.css']
})
export class BeliefsComponent implements OnInit {
  
  @Input() fullDisplay: boolean = true;
  beliefs: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.beliefs.push("We believe in the unity of the divine Trinity- God the Father, God the Son, and God the Holy Spirit. We believe the death of Christ is to be a redemption or ransom paid to the holy demands of God for the sinner and to free the sinner from just condemnation.");
    this.beliefs.push("We believe the church of God refers, not the membership of organized churches, but to the whole company of the redeemed who will have been saved in the present age.");
    this.beliefs.push("We believe in the church ordinances of water baptism by immersion and the Lord's Supper as a visible representation of the good news of the death of Christ for our sins.");
    this.beliefs.push("We believe unquestionably in the resurrection of Christ as a doctrine of central importance upon which all Christian's faith and hope rest.");
    this.beliefs.push("We believe the Lord Jesus Christ will come again to Earth personally and visibly, to establish His kingdom and fulfill God's eternal plan for creation.");
  }

}
