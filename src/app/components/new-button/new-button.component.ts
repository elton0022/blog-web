import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.css']
})
export class NewButtonComponent implements OnInit {

  @Output() newEvent = new EventEmitter<boolean>();

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  new(){
    this.newEvent.emit(true)
    alert("novo")
  }

}
