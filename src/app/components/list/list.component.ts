import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentType } from 'src/app/interfaces/incident.interface';
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
  rowData: Array<IncidentType> = [];
  isMobileLayout = false;

  constructor(
    private listService: FetchListService,
    private router: Router,
    private observer: BreakpointObserver
  ) { }

  ngOnInit() {
    this.observer.observe(Breakpoints.Handset).subscribe((layoutInfo: any) => {
      console.log(layoutInfo);
      const initialLayoutVal = this.isMobileLayout;
      this.isMobileLayout = layoutInfo.matches
      if (initialLayoutVal !== this.isMobileLayout) {
        this.getListData();
      }
    });
    this.getListData();
  }

  getListData() {
    if (this.isMobileLayout) {
      this.listService.getAllIncidentsForMobil().subscribe((result: any) => {
        console.log(result['data']['incidents']);

        this.rowData = result['data']['incidents'];
      });
    } else {
      this.listService.getAllIncidents().subscribe((result: any) => {
        console.log(result['data']['incidents']);

        this.rowData = result['data']['incidents'];
      });
    }
  }

  onSelectionChanged(rowData: any) {
    const { id } = rowData.api.getSelectedRows()[0];
    this.goToForm(id)
  }

  goToForm(id: string) {
    this.router.navigate(['form/' + id]);
  }
}
