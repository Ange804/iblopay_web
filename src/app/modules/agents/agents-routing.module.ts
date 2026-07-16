import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentListComponent } from './pages/agent-list/agent-list.component'
import { AgentDetailComponent } from './pages/agent-detail/agent-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AgentListComponent
  },
  {
    path: ':id',
    component: AgentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }