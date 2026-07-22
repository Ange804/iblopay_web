import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ServicesPublicsRoutingModule } from './services-publics-routing.module';
import { ServicesPublicsListComponent } from './pages/services-publics-list/services-publics-list.component';
import { ServicesPublicsDetailComponent } from './pages/services-publics-detail/services-publics-detail.component';
import { ServicesPublicsEditComponent } from './pages/services-publics-edit/services-publics-edit.component';

@NgModule({
  declarations: [
    ServicesPublicsListComponent,
    ServicesPublicsDetailComponent,
    ServicesPublicsEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ServicesPublicsRoutingModule
  ]
})
export class ServicesPublicsModule { }