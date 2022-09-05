import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from "../../models/Post";
import { returnURL } from "../../utils/functions";
import Icons from "../../../assets/icons";
import * as moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  icons = Icons;

  @Input() postCard: Post;

  dateFormat: string;

  constructor(private route: Router) { 
  }

  ngOnInit(): void {
    moment.locale('pt-br');
    this.dateFormat = moment().format('MMMM d, YYYY');
  }

  onClick(){
    this.route.navigate([`/page/${this.postCard.id}`]);
  }

  url(category: number){
    return returnURL(category);
  }

}
