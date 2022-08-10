import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() fullPageDisplay: boolean = true;
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts.push(new Post("The significance of the cross", "Author Name", 
    "Get to understand the significance of the cross and why you should take your salvation seriously.", 
    "significance_of_the_cross", new Date(2022,7,21)));
    this.posts.push(new Post("The significance of the cross", "Author Name", 
    "Get to understand the significance of the cross and why you should take your salvation seriously.", 
    "significance_of_the_cross", new Date(2022,7,21)));
    this.posts.push(new Post("The significance of the cross", "Author Name", 
    "Get to understand the significance of the cross and why you should take your salvation seriously.", 
    "significance_of_the_cross", new Date(2022,7,21)));
    this.posts.push(new Post("The significance of the cross", "Author Name", 
    "Get to understand the significance of the cross and why you should take your salvation seriously.", 
    "significance_of_the_cross", new Date(2022,7,21)));
    this.posts.push(new Post("The significance of the cross", "Author Name", 
    "Get to understand the significance of the cross and why you should take your salvation seriously.", 
    "significance_of_the_cross", new Date(2022,7,21)));
  }

}
