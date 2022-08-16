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
  }

}
