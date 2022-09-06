import { Component, OnInit } from '@angular/core';
import { returnURL } from "../../utils/functions";
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import * as moment from 'moment';
import Icons from "../../../assets/icons";

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css']
})
export class FullPageComponent implements OnInit {

  id;
  post: Post;
  date;
  icons = Icons;

  constructor(private activeRoute: ActivatedRoute, private route: Router, private postService: PostService) { 
    this.id = +this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.post = this.postService.getPost(this.id);
    moment.locale('pt-br');
    this.date = moment().format('MMMM d, YYYY');
    window.scrollTo(0, 0);
  }

  url(){
    return returnURL(this.post.category);
  }

}
