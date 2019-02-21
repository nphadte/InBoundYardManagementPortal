import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';


import { AppComponent } from './app.component';
import { ConatinerDataTableComponent } from './conatiner-data-table/conatiner-data-table.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { ContainerentrytableComponent } from './containerentrytable/containerentrytable.component';
import { ContainerentryformComponent } from './containerentryform/containerentryform.component';
import { ContainerbackendtableComponent } from './containerbackendtable/containerbackendtable.component';

@NgModule({
  declarations: [
    AppComponent,
    ConatinerDataTableComponent,
    TableDemoComponent,
    ContainerentrytableComponent,
    ContainerentryformComponent,
    ContainerbackendtableComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
