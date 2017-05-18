import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalListComponent }  from './animal-list';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, AnimalListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
