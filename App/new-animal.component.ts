import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
  <h3> New Animal </h3>
  <label>Species:  </label>
     <input class="new-animal-input" #newSpecies><br>
     <label>Name:  </label>
     <input class="new-animal-input" #newName><br>
     <label>Age:  </label>
     <input class="new-animal-input" #newAge><br>
     <label>Diet:  </label>
     <input class="new-animal-input" #newDiet><br>
     <label>Location:  </label>
     <input class="new-animal-input" #newLocation><br>
     <label># of Caretakers:  </label>
     <input class="new-animal-input" #newCaretakers><br>
     <label>Sex:  </label>
     <input class="new-animal-input" #newSex><br>
     <label>Likes:  </label>
     <input class="new-animal-input" #newLikes><br>
     <label>Dislikes:  </label>
     <input class="new-animal-input" #newDislikes>
  </div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string)

  {

  var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);

  this.newAnimalSender.emit(newAnimalToAdd);

  }
}
