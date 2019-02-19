import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ContainerEntry } from '../domain/containerentry';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private  http:HttpClient) { }

  getInitialContainers() {
    return this.http.get('assets/showcase/data/initialcontainer_entry.json')
      .toPromise()
      .then(res => <ContainerEntry[]>res.data)
      .then(data => { return data; });
  }
}
