import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetAComponent } from './widget-a/widget-a.component';
import { WidgetBComponent } from './widget-b/widget-b.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetAComponent,
    WidgetBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
