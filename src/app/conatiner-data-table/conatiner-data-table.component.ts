import {Component, OnInit} from '@angular/core';
import {MatTableModule, MatSortModule, MatSortHeader, MatPaginator,  Sort} from '@angular/material';

export interface Container {
  door_num: number;
  container_num: string;
  drayage: string;
  LFD_Chasis: string;
  LFD_Container: string;
  Container_status: string;
}

@Component({
  selector: 'app-conatiner-data-table',
  templateUrl: './conatiner-data-table.component.html',
  styleUrls: ['./conatiner-data-table.component.css']
})

export class ConatinerDataTableComponent {

  containers: Container[] = [
    {
      door_num: 1,
      container_num: 'MEDU3445878',
      drayage: 'OBCI',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Empty'
    },
    {
      door_num: 2,
      container_num: 'MASD3445878',
      drayage: 'A&O',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Full'
    },
    {
      door_num: 3,
      container_num: 'MEDU3445878',
      drayage: 'MSC A&O',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Empty'
    },
    {
      door_num: 4,
      container_num: 'MEDU3445878',
      drayage: 'AMAR',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Full'
    },
    {
      door_num: 5,
      container_num: 'MEDU3445878',
      drayage: 'MSC A&O',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Empty'
    },
    {
      door_num: 6,
      container_num: 'MEDU3445878',
      drayage: 'MSC TMT',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Full'
    },
    {
      door_num: 7,
      container_num: 'MEDU3445878',
      drayage: 'OBCI',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Empty'
    },
    {
      door_num: 8,
      container_num: 'MEDU3445878',
      drayage: 'MSC A&O',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Full'
    },
    {
      door_num: 9,
      container_num: 'MEDU3445878',
      drayage: 'OBCI',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Empty'
    },
    {
      door_num: 10,
      container_num: 'MEDU3445878',
      drayage: 'MSC A&O',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Full'
    },
    {
      door_num: 1,
      container_num: 'MEDU3445878',
      drayage: 'OBCI',
      LFD_Chasis: '2019-02-21',
      LFD_Container: '2019-02-25',
      Container_status: 'Empty'
    },
  ];

  sortedData: Container[];

  constructor() {
    this.sortedData = this.containers.slice();
  }

  sortData(sort: Sort) {
    const data = this.containers.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';

      switch (sort.active) {
        case  'door_num':
          return compare(a.door_num, b.door_num, isAsc);
        case  'container_num':
          return compare(a.container_num, b.container_num, isAsc);
        case  'drayage':
          return compare(a.drayage, b.drayage, isAsc);
        case  'LFD_Chasis':
          return compare(a.LFD_Chasis, b.LFD_Chasis, isAsc);
        case  'LFD_Container':
          return compare(a.LFD_Container, b.LFD_Container, isAsc);
        case  'Container_status':
          return compare(a.Container_status, b.Container_status, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
