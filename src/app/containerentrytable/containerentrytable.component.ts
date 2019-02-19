import { Component, OnInit } from '@angular/core';
import { Injectable} from '@angular/core';

import { ContainerEntry} from '../domain/containerentry';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-containerentrytable',
  templateUrl: './containerentrytable.component.html',
  styleUrls: ['./containerentrytable.component.css']
})
export class ContainerentrytableComponent implements OnInit {

  constructor( private  http: HttpClient) { }

  ngOnInit() {
  }

  getInitialContainerEntries() {

    return  this.http.get('/')
  }
}
