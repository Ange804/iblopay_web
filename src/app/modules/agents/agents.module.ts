import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgentsRoutingModule } from './agents-routing.module';

import { AgentCreateComponent } from './pages/agent-create/agent-create.component';
import { AgentDetailComponent } from './pages/agent-detail/agent-detail.component';
import { AgentDocumentsComponent } from './pages/agent-documents/agent-documents.component';
import { AgentEditComponent } from './pages/agent-edit/agent-edit.component';
import { AgentListComponent } from './pages/agent-list/agent-list.component';


@NgModule({
  declarations: [
    AgentCreateComponent,
    AgentDetailComponent,
    AgentDocumentsComponent,
    AgentEditComponent,
    AgentListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }