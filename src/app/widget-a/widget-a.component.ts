import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget-a',
  templateUrl: './widget-a.component.html',
  styleUrls: ['./widget-a.component.css']
})
export class WidgetAComponent implements OnInit {

  @Output() emitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.emitter.emit("The widget-a emitted a message!");
  }
}
