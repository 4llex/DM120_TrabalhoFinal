import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ColorPageRoutingModule } from './color-routing.module';
import { ColorPage } from './color.page';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [ColorPage]
})
export class ColorPageModule { }