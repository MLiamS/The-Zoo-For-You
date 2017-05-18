import { Component } from '@angular/core';
import { Animal } from './animal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Zoo For You</h1>
    <animal-list [childAnimalList]="currentAnimals" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  `
})


export class AppComponent {

  selectedAnimal = null;

   currentAnimals: Animal[] = [ new Animal('species', 'testname', 1 , 'diet', 'location', 'caretakers', 'sex', 'likes', 'dislikes'), new Animal('species2', 'testname2', 1 , 'diet2', 'location2', 'caretakers2', 'sex2', 'likes2', 'dislikes2'), new Animal('species3', 'testname3', 1 , 'diet3', 'location3', 'caretakers3', 'sex3', 'likes3', 'dislikes3')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
