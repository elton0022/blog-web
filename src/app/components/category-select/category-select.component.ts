import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent implements OnInit {

  @Input() categoryPost: number;
  @Output() categoryPostChange = new EventEmitter<number>();

  categories = [
    { value: 1, text: "Nenhuma" },
    { value: 2, text: "Esportes" },
    { value: 3, text: "Filmes" },
    { value: 4, text: "Festas" },
    { value: 5, text: "Notícias" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.categoryPostChange.emit(Number(this.categoryPost));
  }

}
