import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

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
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          incidents {
            subject
            owner
            description
            keywords
            link
          }
        }
        `,
        variables: {
          "courseID": 1
        }
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result['data']['incidents']);

        this.rowData = result['data']['incidents'];
      });
  }
}
