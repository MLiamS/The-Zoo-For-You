import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
     <label>Species:  </label>
     <input class="new-animal-input" #newSpecies>
     <label>Name:  </label>
     <input class="new-animal-input" #newName>
     <label>Age:  </label>
     <input class="new-animal-input" #newAge>
     <label>Diet:  </label>
     <input class="new-animal-input" #newDiet>
     <label>Location:  </label>
     <input class="new-animal-input" #newLocation>
     <label># of Caretakers:  </label>
     <input class="new-animal-input" #newCaretakers>
     <label>Sex:  </label>
     <input class="new-animal-input" #newSex>
     <label>Likes:  </label>
     <input class="new-animal-input" #newLikes>
     <label>Dislikes:  </label>
     <input class="new-animal-input" #newDislikes>
  </div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Log Animal</button>
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
