import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-leadership',
  templateUrl: './church-leadership.component.html',
  styleUrls: ['./church-leadership.component.css']
})
export class ChurchLeadershipComponent implements OnInit {

  @Input() fullPageDisplay: boolean = true;
  aboutThePastor: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.aboutThePastor.push("A third born in a family of five, Rev. Joshua Matara was born on July 8, 1985. At the age of 12 Discerning God’s call to the ministry, he responded in faith.");
    this.aboutThePastor.push("Rev. Joshua Matara obtained his primary and secondary education with the public schools of Kisii County, Kenya. From 2006 until  2013, he served our wonderful country in the Ministry of Education. During those years of his service, he met his beautiful wife Elizabeth Zakina, they have been married for over 13 years, and have bare in a flourished marital relationship that is built upon their love for each other, Jesus Christ, and the principals of God’s word. They have three beautiful children, two boys Innocent and David, one daughter Emily.");
    this.aboutThePastor.push("He was ordained as a Reverend Pastor on August 2018 at Keringet PAG Church and later appointed as one of the Senior pastors in Kuresoi PAG District. Currently, he is a bestseller author of many books both local and international.");
    this.aboutThePastor.push("On October 2, 2017, Rev Joshua Matara founded Olenguruone PAG  Church in Kuresoi PAG District ,where he served for five years as Senior Pastor. Presently, under his excellent leadership, Keringet PAG Church is experiencing a holistic ministry that is spirit-filled. Ministries have been established under his guidance such as witnessing in the community, Men of Promise, Women’s ministry, praise and worship ministry and youths of hope ministry.");
    this.aboutThePastor.push("He completed four years of Biblical studies at Nyang'ori Pentecostal Bible College, receiving a diploma in Biblical Theology in March 2, 2011. He proceeded for Bachelor of Arts in Theology from Life Bible College, Columbia USA, and graduated in the year 2015. He continues to put emphasis on the need for spiritual growth and development through the teaching of God’s Word, Bible Study and Sunday School. Rev. Joshua continually strives for improvement because it is necessary for the advancement of the church.");
  }

}
