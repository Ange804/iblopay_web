import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgentsRoutingModule } from './agents-routing.module';

// IMPORTEZ TOUS VOS COMPOSANTS
import { AgentCreateComponent } from './pages/agent-create/agent-create.component';
import { AgentListComponent } from './pages/agent-list/agent-list.component';
import { AgentDetailComponent } from './pages/agent-detail/agent-detail.component';

@NgModule({
  declarations: [
    AgentCreateComponent,
    AgentListComponent,
    AgentDetailComponent  // ← AJOUTEZ CECI
  ],
  imports: [
    CommonModule,          // ← ESSENTIEL pour *ngIf, *ngFor, pipes
    ReactiveFormsModule,   // ← ESSENTIEL pour formGroup
    RouterModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }