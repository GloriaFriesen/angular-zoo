import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `

  <h2>Current Animals:</h2>
  <br>
  <div class="row">
    <div class="col-md-4">
      <label>Filter by Age</label>
      <br>
      <select class="form-control" (change)="onAgeChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Young Animals (2 years and younger)</option>
        <option value="matureAnimals">Mature Animals (older than 2 years)</option>
      </select>
    </div>
    <div class="col-md-4">
      <label>Filter by Diet</label>
      <br>
      <select class="form-control" (change)="onDietChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="herbivore">Herbivores</option>
        <option value="carnivore">Carnivores</option>
        <option value="omnivore">Omnivores</option>
        <option value="anyMeat">Meat Eaters</option>
      </select>
    </div>
  </div>
  <table>
    <tr id="tableHeader">
      <th>Name</th>
      <th>Species</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
      <th></th>
    </tr>
    <tr *ngFor="let currentAnimal of childAnimalList | filterAge:filterByAge | filterDiet:filterByDiet">
      <td>{{currentAnimal.name}}</td>
      <td>{{currentAnimal.species}}</td>
      <td>{{currentAnimal.age}}</td>
      <td>{{currentAnimal.diet}}</td>
      <td>{{currentAnimal.location}}</td>
      <td>{{currentAnimal.caretakers}}</td>
      <td>{{currentAnimal.sex}}</td>
      <td>{{currentAnimal.likes}}</td>
      <td>{{currentAnimal.dislikes}}</td>
      <td><button (click)="editButtonHasBeenClicked(currentAnimal)" class="formButton">Edit</button></td>
    </tr>
  </table>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  filterByAge: string = "allAnimals";
  filterByDiet: string = "allAnimals";

  onAgeChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  onDietChange(optionFromMenu) {
    this.filterByDiet = optionFromMenu;
  }
}
