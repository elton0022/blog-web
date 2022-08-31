import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../../models/Post";
import { Category } from "../../enum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() postCard: Post;

  dateFormat: string;
  hoursFormat: string;

  constructor() { }

  ngOnInit(): void {
    this.dateFormat = this.postCard.dateAndHour.toLocaleDateString();
    this.hoursFormat = this.postCard.dateAndHour.getHours() + ":" + this.postCard.dateAndHour.getMinutes()
  }

  returnURL(category: number) {

    const dir: string = "../../../assets/images";

    const defaultImg: string = `${dir}/card-background.jpg`;

    switch (category) {
      case Category.NENHUMA:
        return defaultImg;

      case Category.ESPORTES:
        return `${dir}/sports-background.jpg`;

      case Category.FILMES:
        return `${dir}/movies-background.jpg`;

      case Category.FESTAS:
        return `${dir}/parties-background.jpg`;

      case Category.NOTICIAS:
        return `${dir}/news-background.jpg`;

      default:
        return defaultImg;
    }
  }

}
