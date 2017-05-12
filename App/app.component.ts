import { Component } from '@angular/core';
import { Animal } from './animal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Zoo For You</h1>
    <h3>{{currentAnimals}}</h3>
  </div>
  `
})


export class AppComponent {

   currentAnimals: Animal[] = [ new Animal('species', 'name', 1 , 'diet', 'location', 'caretakers', 'sex', 'likes', 'dislikes')
  ];
}
