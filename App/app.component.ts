import { Component } from '@angular/core';
import { Animal } from './animal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Zoo For You</h1>
    <animal-list [childAnimalList]="currentAnimals" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})


export class AppComponent {

  selectedAnimal = null;

   currentAnimals: Animal[] = [ new Animal('species', 'testname', 1 , 'diet', 'location', 2, 'sex', 'likes', 'dislikes'), new Animal('species2', 'testname2', 1 , 'diet2', 'location2', 2, 'sex2', 'likes2', 'dislikes2'), new Animal('species3', 'testname3', 1 , 'diet3', 'location3', 3, 'sex3', 'likes3', 'dislikes3')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
  this.currentAnimals.push(newAnimalFromChild);
}
}
