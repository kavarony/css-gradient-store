import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorContrastCheckerComponent } from './color-contrast-checker.component';

const routes: Routes = [  { path: '', component: ColorContrastCheckerComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorContrastCheckerRoutingModule { }
