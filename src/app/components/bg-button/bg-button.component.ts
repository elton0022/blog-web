import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() icon;

  constructor(private route: Router) { }

  ngOnInit(): void { }

  onClick() {
    this.click.emit(true);
  }

  isRegister() {
    return this.route.url === '/register';
  }

}
