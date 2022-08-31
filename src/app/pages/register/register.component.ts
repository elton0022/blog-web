import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  post = new Post();

  constructor(private titleService: Title, private postService: PostService, private route: Router ) { };

  ngOnInit(): void {
    this.titleService.setTitle("BlogWeb | Novo");
  }

  onSubmit(): void {
    this.postService.savePost(this.post);
    this.route.navigate(['/dashboard']);
  }

}
