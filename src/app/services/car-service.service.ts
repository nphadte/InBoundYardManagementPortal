import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from '../domain/car';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private  http:HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/showcase/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
  }

  getCarsMedium() {
    return this.http.get<any>('assets/showcase/data/cars-medium.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
  }
}
