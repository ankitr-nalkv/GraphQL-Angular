import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchListService } from 'src/app/services/fetch-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: any;
  formId = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public activateRoute: ActivatedRoute,
    private listService: FetchListService,
  ) { 
    this.activateRoute.params.subscribe(param => {
      this.formId = param['id'];
      this.listService.getIncidentById(this.formId)
      .subscribe((formData: any) => {
        let incidentData = formData['data']['incident'];
        console.log(incidentData);
        this.form.patchValue(incidentData);
      });
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      subject: ['', Validators.required],
      owner: [],
      description: [],
      keywords: [],
      link: []
    })
  }

}