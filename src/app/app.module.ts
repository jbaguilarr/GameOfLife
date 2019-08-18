import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { GameOfLife } from './models/gameoflife';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameOfLife],
  bootstrap: [AppComponent]
})
export class AppModule { }
