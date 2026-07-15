import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

@Component({
  selector: 'app-agents',
  template: '<h1>Agents</h1><p>Agents module placeholder.</p>'
})
class AgentsComponent {}

const routes: Routes = [
  {
    path: '',
    component: AgentsComponent
  }
];

@NgModule({
  declarations: [AgentsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule {}
