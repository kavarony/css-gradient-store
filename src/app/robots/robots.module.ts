import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotsRoutingModule } from './robots-routing.module';
import { RobotsComponent } from './robots.component';


@NgModule({
  declarations: [
    RobotsComponent
  ],
  imports: [
    CommonModule,
    RobotsRoutingModule
  ]
})
export class RobotsModule { }
