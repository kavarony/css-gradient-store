import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotsComponent } from './robots.component';

const routes: Routes = [  { path: '', component: RobotsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotsRoutingModule { }
