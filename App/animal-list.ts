import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';

@Component({
  selector: 'animal-list',
  template: `
  <div class="container">
    <ul *ngFor="let currentAnimal of childAnimalList">
       <li>Name:  {{currentAnimal.name}}</li>
       <li>Species:  {{currentAnimal.species}}</li>
       <li>Age:  {{currentAnimal.age}}</li>
       <li>Diet:  {{currentAnimal.diet}}</li>
       <li>Location:  {{currentAnimal.location}}</li>
       <li>Caretakers:  {{currentAnimal.caretakers}}</li>
       <li>Sex:  {{currentAnimal.sex}}</li>
       <li>Likes:  {{currentAnimal.likes}}</li>
       <li>Dislikes:  {{currentAnimal.dislikes}}</li>
       <hr>
     </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
