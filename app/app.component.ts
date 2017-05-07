import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" id="animalList">
    <div id="title">
      <h1>Angular Zoo</h1>
    </div>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (clickNewAnimalSender)="showNewAnimal()"></animal-list>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <new-animal (newAnimalSender)="addAnimal($event)" [addNewAnimal]="addNewAnimal" (cancelFormClickedSender)="closeNewForm()"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  addNewAnimal = false;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Lying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 6, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises'),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  showNewAnimal() {
    this.addNewAnimal = true;
  }

  closeNewForm() {
    this.addNewAnimal = false;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
