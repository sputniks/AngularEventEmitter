import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('div_a', { static: false }) div_a: Component;

  onClick(event) {
    console.log("...onClick() div_a:", this.div_a);
  }

  constructor() {
    console.log("...constructor() div_a:", this.div_a);
  }

  ngOnInit() {
    console.log("...ngOnInit() div_a:", this.div_a);
  }


}
