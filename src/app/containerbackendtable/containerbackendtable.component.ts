import { Component, OnInit } from '@angular/core';
import { ContainerEntry} from '../domain/containerentry';
import {ContainerService} from '../services/container.service';
import {error} from '@angular/compiler/src/util';
import {errorComparator} from 'tslint/lib/verify/lintError';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-containerbackendtable',
  templateUrl: './containerbackendtable.component.html',
  styleUrls: ['./containerbackendtable.component.css']
})
export class ContainerbackendtableComponent implements OnInit {

  ContainerEntries: ContainerEntry[];
  cols: any[];

  constructor( private  containerService: ContainerService ) { }

  ngOnInit() {

    this.containerService.getDBContainers()
      .subscribe( data  => {
        this.ContainerEntries = data;
      });

    this.cols = [
      /*{ field: 'id', header:  'ID'},*/
      { field: 'container_IDENTIFIER', header:  'CONTAINER_IDENTIFIER'},
      { field: 'container_NUMBER', header:  'CONTAINER_#'},
      { field: 'bol_NUMBER', header:  'BOL_NUMBER'},
      { field: 'container_LOC', header:  'CONTAINER_LOCATION'},
      { field: 'container_STATUS', header:  'CONTAINER_STATUS'},
      { field: 'carrier_NAME', header:  'CARRIER_NAME'},
      { field: 'drayage', header:  'DRAYAGE'},
      { field: 'lfd_CONTAINER', header:  'LFD_CONTAINER'},
      { field: 'lfd_CHASIS', header:  'LFD_CHASIS'},
      { field: 'wh_CHECKED_IN_USER', header:  'LAST_UPDATED_USER'},
      { field: 'wh_CHECKED_IN_DATETIME', header:  'LAST_UPDATED_DATETIME'}
    ];
  }
}
