import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctrine',
  templateUrl: './doctrine.component.html',
  styleUrls: ['./doctrine.component.css']
})
export class DoctrineComponent implements OnInit {

  @Input() fullDisplay:boolean = true;

  doctrines = new Map();
  pledges: string[] = [];
  goals: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeDoctrines();
    this.initializepledges();
    this.initializeGoals();
  }

  initializeDoctrines() {
    this.doctrines.set("mission", "To preach the Gospel with signs following and establish self – propagating churches, which believe and obey the great commission. (Mathew 28: 16 – 20)");
    this.doctrines.set("vision", "To provide sound Christian teaching for all members and adherents who practice holiness and seek to be baptized in the Holy Spirit. (Hebrews 12: 14, Acts 1:8)");
    this.doctrines.set("values", "We are committed to nurturing in our Assemblies, ministries, organs and programs the values of Ministry, Leadership, and Community");
    this.doctrines.set("motto", "Serving the Nations with the Word..");
  }
  
  initializepledges() {
    this.pledges.push("There is one God; God the father, God the Son, and God the Holy Spirit."); 
    this.pledges.push("We will, under the anointing of The Holy Spirit, be obedient to the Great Commission to teach and promote Christianity.")
    this.pledges.push("We will evangelize the lost and make Christ known through both verbal and righteous daily living. We will evangelize the lost and make Christ known through both verbal and righteous daily living.");
    this.pledges.push("We will continue to develop ministries that demonstrate the love of God for humanity and that are relevant to the needs of all people.");
    this.pledges.push("We, as believers and Disciples of Christ, will continue to magnify the Lord in worship, prayer, instruction, financial support and encouragement");
  }

  initializeGoals() {
    this.goals.push("To facilitate the ministry of the Holy Spirit to bring healing and forgiveness to the heart, resulting in the transformation of people's lives and the lost finding salvation in Jesus Christ.");
    this.goals.push("To continue to find avenues to care for the needy in our community in a personal, one on one basis. Going heart to heart.");
    this.goals.push("To be clear and meaningful expression of His love and power to the youth in our community.");
    this.goals.push("To be a resource to pastors and the greater body of Christ in our community, and facilitate unity among the churches");
  }

  asIsOrder(a:any, b:any) {
    return 1;
  }

}
