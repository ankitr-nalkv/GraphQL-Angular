import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

const routes = [
  {
    path: 'form/:id',
    component: FormComponent,
  },
  {
    path: '**',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
