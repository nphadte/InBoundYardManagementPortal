import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CarServiceService } from '../services/car-service.service';
import {Car} from '../domain/car';
import { TableModule} from 'primeng/table';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

  // add the car domain
  cars: Car[];

  cols: any[];


  // add the carservice
  constructor(private carService: CarServiceService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

}
