// src/app/modules/agents/agents.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgentsRoutingModule } from './agents-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
