import { Component } from '@angular/core';
import { Animal } from './animal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Zoo For You</h1>
    <div class="row">
      <div class="col-md-6">
        <animal-list [childAnimalList]="currentAnimals" (clickSender)="editAnimal($event)"></animal-list>
      </div>
      <div class="col-md-6">
        <div class="well">
          <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        </div>
        <div class="well">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
        </div>
      </div>
  </div>
  `
})


export class AppComponent {

  selectedAnimal = null;

   currentAnimals: Animal[] = [ new Animal('Frog', 'Sam', 7 , 'Flys', 'The Bog', 2, 'Female', 'Jumping', 'Salt'), new Animal('Dog', 'Rex', 2 , 'Cat-Food', 'by the mailbox', 2, 'Male', 'Mail men', 'Cats'), new Animal('Ladybug', 'Frank', 1 , 'Cheeseburgers', 'Front Yard', 18, 'Male', 'cheddar', 'fly-swatters')
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
