import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component ({
  selector: 'edit-animal',
  template: `
  <div class="form" *ngIf="childSelectedAnimal">
    <h2>Edit {{childSelectedAnimal.name}}</h2>
    <div class="form-group">
      <label>Species</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
    </div>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div class="form-group">
      <label>Age</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div class="form-group">
      <label>Diet</label>
      <select [(ngModel)]="childSelectedAnimal.diet" class="form-control">
        <option>Herbivore</option>
        <option>Omnivore</option>
        <option>Carnivore</option>
      </select>
    </div>
    <div class="form-group">
      <label>Location</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
    </div>
    <div class="form-group">
      <label>Number of Caretakers</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
    </div>
    <div class="form-group">
      <label>Sex</label><br>
      <input type="radio" [(ngModel)]="childSelectedAnimal.sex" [value]="1">Male<br>
      <input type="radio" [(ngModel)]="childSelectedAnimal.sex" [value]="2">Female<br>
    </div>
    <div class="form-group">
      <label>Likes</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
    </div>
    <div class="form-group">
      <label>Dislikes</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
    </div>
    <button class="saveButton" (click)="doneButtonClicked()">Save Changes</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
