import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';

@Component({
  selector: 'animal-list',
  template: `
  <select class="customSelectClass" (change)="onChange($event.target.value)">
        <option value="all" selected="selected">All Animals</option>
        <option value="2plus">Animals 2 years and older</option>
        <option value="2minus">Animals under 2 years</option>
      </select>
  <div class="container">
    <div class="well">
      <ul *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
        <li>Name:  {{currentAnimal.name}}</li>
        <li>Species:  {{currentAnimal.species}}</li>
        <li>Age:  {{currentAnimal.age}}</li>
        <li>Diet:  {{currentAnimal.diet}}</li>
        <li>Location:  {{currentAnimal.location}}</li>
        <li>Caretakers:  {{currentAnimal.caretakers}}</li>
        <li>Sex:  {{currentAnimal.sex}}</li>
        <li>Likes:  {{currentAnimal.likes}}</li>
        <li>Dislikes:  {{currentAnimal.dislikes}}</li>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        <hr>
      </ul>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "all";


  editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
    }

    onChange(optionFromMenu) {
      this.filterByAge = optionFromMenu;
    }
}
