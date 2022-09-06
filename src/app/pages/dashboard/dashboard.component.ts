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
    
    document.addEventListener('getPosts', (e: any) => {
      e.preventDefault();
      this.posts = this.postService.filterForCategory(e.detail.value);
    });

    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  toRegister() {
    this.route.navigate(['/register']);
  }

  filterCategory(category) {
    this.posts = this.postService.filterForCategory(category);
  }

}
