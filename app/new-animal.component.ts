import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
  <div class="form" id="newAnimalForm" *ngIf="addNewAnimal">
    <h2>New Animal</h2>
    <div class="form-group">
      <label>Enter Species</label>
      <input #newSpecies required class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Name</label>
      <input #newName required class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Age</label>
      <input type="number" min="0" #newAge required class="form-control">
    </div>
    <div class="form-group">
      <label>Diet (Herbivore, Omnivore, or Carnivore)</label>
      <input #newDiet required class="form-control">
    <div class="form-group">
      <label>Location</label>
      <input #newLocation class="form-control">
    </div>
    <div class="form-group">
      <label>Number of Caretakers</label>
      <input type="number" min="0" #newCaretakers required class="form-control">
    </div>
    <div class="form-group">
      <label>Sex</label>
      <input #newSex required class="form-control">
    </div>
    <div class="form-group">
      <label>Likes</label>
      <input #newLikes required class="form-control">
    </div>
    <div class="form-group">
      <label>Dislikes</label>
      <input #newDislikes required class="form-control">
    </div>
    <a href="#animalList" class="linkToTop">
      <button class="saveButton" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Save New Animal</button>
    </a>
    <a href="#animalList" class="linkToTop">
      <button class="saveButton" (click)="cancelFormClicked()">Close Form</button>
    </a>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() cancelFormClickedSender = new EventEmitter();
  @Input() addNewAnimal: boolean;

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  cancelFormClicked() {
    this.cancelFormClickedSender.emit();
  }
}
