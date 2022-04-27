import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePanelComponent } from './create-panel/create-panel.component';
import { PanelListComponent } from './panel-list/panel-list.component';

const routes: Routes = [
  {path:'Panels', component: PanelListComponent},
  {path:'create-panel', component:CreatePanelComponent},
  {path:'update-panel/:id',component:CreatePanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
