import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EklePageRoutingModule } from './ekle-routing.module';

import { EklePage } from './ekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EklePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EklePage],
})
export class EklePageModule {}
