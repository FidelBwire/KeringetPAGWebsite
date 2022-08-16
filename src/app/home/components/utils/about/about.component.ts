import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  @Input() fullPageDisplay: boolean = true;
  about!: string;

  constructor() { }

  ngOnInit(): void {
    this.about = "Keringet Pentecostal Assemblies of God (PAG) church is a fountain of salvation for all souls for the glory of God. The church is located in Keringet town center next to Silver Lilies Senior Academy School. The church is in a unique position to this ever evolving community as we continuously develop innovative ways to invite people to experience God's eternal and unchanging grace. Therefore, to satisfy the spiritual needs of the changing population served by the Keringet Pentecostal Assemblies of God Church, we, as a congregation, shall attract and inspire the neighborhood population to make Keringet PAG Church their spiritual home by: directing and involving the surrounding community, routinely communicating worship opportunities and other daily activities, and developing a climate of inclusion, welcoming everyone from all walks of life. We will boldly serve the global and local communities as needs and opportunities arise (i.e. missionary support, conference needs, national and global disasters, and response to hunger). We shall be responsive to God's challenge to live out our faith seven days a week by: proclaiming salvation by accepting Jesus Christ as our Savior, worshiping steadfastly, offering earnestly our unique talents, teaching and learning God's message from scriptures, and engaging in the power of prayer and meditation. We will foster spiritual growth of individuals through reassurance, inspiration, and guidance so that all people can be vehicles of God's constant gift of love and forgiveness."
  }
}
