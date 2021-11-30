import { Component, OnInit } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  columns: Array<GuiColumn> = [
    {
      header: 'Name',
      field: 'name',
    },
    {
      header: 'Type',
      field: 'type',
    },
    {
      header: 'Price',
      field: 'price',
    },
  ];
  source: Array<any> = [
    {
      name: 'T-shirt',
      type: 'clothes',
      price: '15$',
    },
    {
      name: 'Shoes',
      type: 'footwear',
      price: '100$',
    },
    {
      name: 'Ball cap',
      type: 'headgear',
      price: '50$',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
