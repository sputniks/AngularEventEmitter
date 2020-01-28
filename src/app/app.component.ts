import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('widgetB', { static: false }) widget_b_view: Component;

  title = 'stackblitzEventEmitter';

  fetchEvent(event) {
    console.log("...got event " + event);
    console.log("...got widget_b_view: " + this.widget_b_view);
    console.dir(this.widget_b_view);

    // this.widget_b_view.showMessage("MESSAGE");

  }


}
