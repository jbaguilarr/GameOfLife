import { Component } from '@angular/core';
import { GameOfLife } from './models/gameoflife';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameoflife';
  boxarray: any;
  constructor(boxes: GameOfLife) {
    this.boxarray = boxes.DevolverArray();
    console.log(this.boxarray);
  }
}
