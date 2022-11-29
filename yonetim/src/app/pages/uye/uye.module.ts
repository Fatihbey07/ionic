import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UyePageRoutingModule } from './uye-routing.module';

import { UyePage } from './uye.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UyePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [UyePage],
})
export class UyePageModule {}
