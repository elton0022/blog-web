import { Component, OnInit } from '@angular/core';
import { returnURL } from "../../utils/functions";
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import * as moment from 'moment';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css']
})
export class FullPageComponent implements OnInit {

  id;
  post: Post;
  //moment = moment.locale('pt-br');
  date;

  constructor(private activeRoute: ActivatedRoute, private route: Router, private postService: PostService) { 
    this.id = +this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.post = this.postService.getPost(this.id);
    moment.locale('pt-br');
    this.date = moment().format('LLL');
  }

  url(){
    return returnURL(this.post.category);
  }

}
