import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ContainerEntry } from '../domain/containerentry';
import {Car} from '../domain/car';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private  http:HttpClient) { }

  getInitialContainers() {
    return this.http.get<any>('assets/showcase/data/initialcontainer_entries.json')
      .toPromise()
      .then(res => <ContainerEntry[]>res.data)
      .then(data => { return data; });
  }

  getDBContainers(){

  }
}
