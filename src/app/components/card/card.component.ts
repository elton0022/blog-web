import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from "../../models/Post";
import { returnURL } from "../../utils/functions";  

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() postCard: Post;

  dateFormat: string;
  hoursFormat: string;

  constructor(private route: Router) { 
  }

  ngOnInit(): void {
    this.dateFormat = this.postCard.dateAndHour.toLocaleDateString();
    this.hoursFormat = this.postCard.dateAndHour.getHours() + ":" + this.postCard.dateAndHour.getMinutes()
  }

  onClick(){
    this.route.navigate([`/page/${this.postCard.id}`]);
  }

  url(category: number){
    return returnURL(category);
  }

}
