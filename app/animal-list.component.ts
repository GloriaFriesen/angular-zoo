import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}</li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
