import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component ({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Edit {{childSelectedAnimal.name}}</h3>
    <h3>Edit Animal</h3>

    <label>Species</label>
    <input [(ngModel)]="childSelectedAnimal.species">

    <label>Name</label>
    <input [(ngModel)]="childSelectedAnimal.name">

    <label>Age</label>
    <input [(ngModel)]="childSelectedAnimal.age">

    <label>Diet</label>
    <input [(ngModel)]="childSelectedAnimal.diet">

    <label>Location</label>
    <input [(ngModel)]="childSelectedAnimal.location">

    <label>Number of Caretakers</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers">

    <label>Sex</label><br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.sex" [value]="1">Male<br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.sex" [value]="2">Female<br>

    <label>Likes</label>
    <input [(ngModel)]="childSelectedAnimal.likes">

    <label>Dislikes</label>
    <input [(ngModel)]="childSelectedAnimal.dislikes">

    <button (click)="doneButtonClicked()">Done</button>
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
