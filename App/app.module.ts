import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalDetailsComponent }  from './animal-details';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, AnimalDetailsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
