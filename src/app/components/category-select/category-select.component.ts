import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from "../../enum/index";

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent implements OnInit {

  @Input() categoryPost: number;
  @Input() color: string;
  @Input() customTextDefault: string;
  @Input() borderRadius: string;
  @Input() backgroundColor: string;
  @Input() disableLabel: boolean;
  @Output() categoryPostChange = new EventEmitter<number>();

  categories = [
    { value: Category.NENHUMA, text: "Nenhuma" },
    { value: Category.ESPORTES, text: "Esportes" },
    { value: Category.FILMES, text: "Filmes" },
    { value: Category.FESTAS, text: "Festas" },
    { value: Category.NOTICIAS, text: "Notícias" }
  ];

  constructor(private route: Router) { 
    
  }

  ngOnInit(): void {
    this.categories[0].text = this.customTextDefault  || this.categories[0].text;
  }

  onChange(){
    this.categoryPostChange.emit(Number(this.categoryPost));
  }

  isRegister() {
    return this.route.url === '/register';
  }

}
