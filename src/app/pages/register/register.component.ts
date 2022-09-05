import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Icons from "../../../assets/icons";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  post = new Post();
  public Editor = ClassicEditor;
  icons = Icons;

  constructor(private titleService: Title, private postService: PostService, private route: Router ) { };

  ngOnInit(): void {
    this.titleService.setTitle("BlogWeb | Novo");
  }

  onSubmit(): void {
    this.postService.savePost(this.post);
    this.route.navigate(['/dashboard']);
  }

}
