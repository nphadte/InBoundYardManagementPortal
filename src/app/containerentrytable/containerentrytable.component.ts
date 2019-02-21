import { Component, OnInit } from '@angular/core';
import { ContainerEntry} from '../domain/containerentry';
import {ContainerService} from '../services/container.service';

@Component({
  selector: 'app-containerentrytable',
  templateUrl: './containerentrytable.component.html',
  styleUrls: ['./containerentrytable.component.css']
})
export class ContainerentrytableComponent implements OnInit {

  ContainerEntries:  ContainerEntry[];
  cols:  any[];

  constructor( private  containerService : ContainerService) { }

  ngOnInit() {
    this.containerService.getInitialContainers().then(Containers => this.ContainerEntries = Containers );

    this.cols = [
      { field: 'CONTAINER_IDENTIFIER', header:  'CONTAINER_IDTY'},
      { field: 'WAREHOUSE_LOC', header:  'WAREHOUSE_LOC'},
      { field: 'BOL_NUMBER', header:  'BOL_NUMBER'},
      { field: 'CONTAINER_NUMBER', header:  'CONTAINER_#'},
      { field: 'CONTAINER_STATUS', header:  'CONTAINER_STUS'},
      { field: 'GATE_NUM', header:  'GATE_NUM'},
      { field: 'DRAYAGE', header:  'DRAYAGE'},
      { field: 'CARRIER_NAME', header:  'CARRIER_NAME'},
      { field: 'LFD_CONTAINER', header:  'LFD_CONTAINER'},
      { field: 'LFD_CHASIS', header:  'LFD_CHASIS'},
      { field: 'WH_CHECKED_IN_USER', header:  'WH_ENTRY_USER'},
      { field: 'WH_CHECKED_IN_DATETIME', header:  'WH_ENTRY_DATETIME'}
    ]
  }
}


