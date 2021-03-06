import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { FilterAgePipe } from './filter-age.pipe';
import { FilterDietPipe } from './filter-diet.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, EditAnimalComponent, NewAnimalComponent, FilterAgePipe, FilterDietPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
