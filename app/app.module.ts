import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AnimalListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
