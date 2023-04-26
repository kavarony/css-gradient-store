import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorContrastCheckerRoutingModule } from './color-contrast-checker-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ColorContrastCheckerComponent } from './color-contrast-checker.component';


@NgModule({
  declarations: [
    ColorContrastCheckerComponent
  ],
  imports: [
    CommonModule,
    ColorContrastCheckerRoutingModule,
    HeaderModule,
    FooterModule
  ], exports: [
    ColorContrastCheckerComponent
  ]
})
export class ColorContrastCheckerModule { }
