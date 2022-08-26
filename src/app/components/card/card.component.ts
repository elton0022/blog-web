import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../../models/Post";

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

  returnURL(category: string) {

    const defaultImg: string = "../../../assets/images/card-background.jpg";

    switch (category) {
      case "Nenhuma":
        return defaultImg;

      case "Esportes":
        return "../../../assets/images/sports-background.jpg";

      case "Filmes":
        return "../../../assets/images/movies-background.jpg";

      case "Festas":
        return "../../../assets/images/parties-background.jpg";

      case "Notícias":
        return "../../../assets/images/news-background.jpg";

      default:
        return defaultImg;
    }
  }

}
