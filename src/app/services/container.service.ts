import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse }  from '@angular/common/http';
import {ContainerEntry} from '../domain/containerentry';

import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private  http: HttpClient ) {
  }

  /*getInitialContainers() {
    return this.http.get<any>('assets/showcase/data/initialcontainer_entries.json')
      .toPromise()
      .then(res => res.data as ContainerEntry[])
      .then(data => data);
  }*/

  getDBContainers(): Observable<ContainerEntry[]> {
    // @ts-ignore
      return this.http.get<ContainerEntry[]> ('http://localhost:8090/api/allcontainers');
  }

  /*getOneDBContainer() {
    return this.http.get('http://localhost:8090/api/getonecontainer');
  }*/
  /*saveDBContainer( ContainerEntry  ce) {
        return  this.http.post('http://localhost:8090/container', ce);
  }*/
}
