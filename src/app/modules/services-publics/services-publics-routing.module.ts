import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPublicsListComponent } from './pages/services-publics-list/services-publics-list.component';
import { ServicesPublicsDetailComponent } from './pages/services-publics-detail/services-publics-detail.component';
import { ServicesPublicsEditComponent } from './pages/services-publics-edit/services-publics-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesPublicsListComponent
  },
  {
    path: ':id',
    component: ServicesPublicsDetailComponent
  },
  {
    path: 'edit/:id',
    component: ServicesPublicsEditComponent
  },
  {
    path: ':id/edit',
    redirectTo: 'edit/:id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesPublicsRoutingModule { }