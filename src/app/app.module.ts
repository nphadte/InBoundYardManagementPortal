import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConatinerDataTableComponent } from './conatiner-data-table/conatiner-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ConatinerDataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
