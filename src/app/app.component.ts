import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo-App';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Changed title';
    // }, 1000);
  }
}
