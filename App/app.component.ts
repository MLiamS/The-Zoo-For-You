import { Component } from '@angular/core';
import { Animal } from './animal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Zoo For You</h1>
    <creature-detail [childAnimalList]="currentAnimals"></creature-detail>
  </div>
  `
})


export class AppComponent {

   currentAnimals: Animal[] = [ new Animal('species', 'testname', 1 , 'diet', 'location', 'caretakers', 'sex', 'likes', 'dislikes'; new Animal('species2', 'testname2', 1 , 'diet2', 'location2', 'caretakers2', 'sex2', 'likes2', 'dislikes2')
  ];
}
