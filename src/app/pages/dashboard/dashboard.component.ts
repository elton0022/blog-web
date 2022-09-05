import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private titleService: Title, private route: Router) {
    this.titleService.setTitle("BlogWeb | Dashboard");
  }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  toRegister(){
    this.route.navigate(['/register']);
  }

  // filterDateTime() {
  //   this.posts = this.postService.filterForDateAndHour(this.dateTime);
  // }

  // filterCategory(category) {
  //   this.posts = this.postService.filterForCategory(category);
  // }

}
