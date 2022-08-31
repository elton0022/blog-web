import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {

  @Input() disabledButton: boolean;
  @Output() disabledButtonChange = new EventEmitter<boolean>();
  @Output() saveEvent = new EventEmitter<boolean>();

  t = true;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.saveEvent.emit(true)
  }

}
