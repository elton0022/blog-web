import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bg-button',
  templateUrl: './bg-button.component.html',
  styleUrls: ['./bg-button.component.css']
})
export class BgButtonComponent implements OnInit {

  @Output() click = new EventEmitter<boolean>();
  @Input() color: string;
  @Input() text: string;
  @Input() desabled: boolean;

  constructor() { }

  ngOnInit(): void { }

  onClick(){
    this.click.emit(true);
  }

}
