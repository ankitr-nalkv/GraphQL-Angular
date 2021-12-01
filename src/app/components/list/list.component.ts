import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FetchListService } from 'src/app/services/fetch-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  columnDefs = [
    { headerName: 'Subject', field: 'subject' },
    { headerName: 'Owner', field: 'owner' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Keywords', field: 'keywords' },
    { headerName: 'Link', field: 'link' },
  ];

  rowData = [];
  constructor(
    private listService: FetchListService,
    private router: Router
    ) { }

  ngOnInit() {
    this.listService.getAllIncidents().subscribe((result: any) => {
        console.log(result['data']['incidents']);

        this.rowData = result['data']['incidents'];
      });
  }

  onSelectionChanged(rowData: any) {
    const {id} =  rowData.api.getSelectedRows()[0];
    this.router.navigate(['form/'+ id]);
    debugger;
  }
}
