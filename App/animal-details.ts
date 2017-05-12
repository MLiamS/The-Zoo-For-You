import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';

@Component({
  selector: 'creature-detail',
  template: `
  <div class="container">
    <ul *ngFor="let currentAnimal of childAnimalList">
       <li>Name: {{currentAnimal.name}}</li>
       <li>Species: {{currentAnimal.species}}</li>
       <li></li>
       <li></li>
       <li></li>

     </ul>
  </div>
  `
})

export class AnimalDetailsComponent {
  @Input() childAnimalList: Animal[];
}
