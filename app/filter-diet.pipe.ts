import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "filterDiet",
  pure: false
})

export class FilterDietPipe implements PipeTransform {
transform(input: Animal[], dietFilter) {
var output: Animal[] = [];
  if(dietFilter === "herbivore") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].diet === "Herbivore") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (dietFilter === "carnivore") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].diet === "Carnivore") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (dietFilter === "omnivore") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].diet === "Omnivore") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (dietFilter === "anyMeat") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].diet === "Omnivore" || input[i].diet === "Carnivore") {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
