// src/app/modules/agents/agents.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // ← AJOUTER CET IMPORT
import { RouterModule } from '@angular/router';
import { AgentsRoutingModule } from './agents-routing.module';

// Vous devez aussi déclarer vos composants
import { AgentCreateComponent } from './pages/agent-create/agent-create.component';
import { AgentListComponent } from './pages/agent-list/agent-list.component';

@NgModule({
  declarations: [
    AgentCreateComponent,  // ← AJOUTER
    AgentListComponent,    // ← AJOUTER
    // ... autres composants du module
  ],
  imports: [
    CommonModule,          // ← Déjà présent (corrige l'erreur pipe number)
    ReactiveFormsModule,   // ← AJOUTER (corrige l'erreur formGroup)
    RouterModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }