import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div class="form-group">
    <label>Enter Species</label>
    <input #newSpecies class="form-control">
  </div>
  <div class="form-group">
    <label>Enter Name</label>
    <input #newName class="form-control">
  </div>
  <div class="form-group">
    <label>Enter Age</label>
    <input type="number" #newAge class="form-control">
  </div>
  <label>Diet</label>
  <select #newDiet  class="form-control">
    <option [value]="herbivore">Herbivore</option>
    <option [value]="omnivore">Omnivore</option>
    <option [value]="carnivore">Carnivore</option>
  </select>
  <div class="form-group">
    <label>Location</label>
    <input #newLocation class="form-control">
  </div>
  <div class="form-group">
    <label>Number of Caretakers</label>
    <input type="number" #newCaretakers class="form-control">
  </div>
  <label>Sex</label>
  <select #newSex  class="form-control">
    <option [value]="male">Male</option>
    <option [value]="female">Female</option>
  </select>
  <div class="form-group">
    <label>Likes</label>
    <input #newLikes class="form-control">
  </div>
  <div class="form-group">
    <label>Dislikes</label>
    <input #newDislikes class="form-control">
  </div>
  <a href="#animalList" class="linkToTop"><button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Save New Animal</button></a>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}