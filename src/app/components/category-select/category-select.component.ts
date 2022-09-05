import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

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
    { value: 1, text: "Nenhuma" },
    { value: 2, text: "Esportes" },
    { value: 3, text: "Filmes" },
    { value: 4, text: "Festas" },
    { value: 5, text: "Notícias" }
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
