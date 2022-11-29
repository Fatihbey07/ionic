import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuzenlePageRoutingModule } from './duzenle-routing.module';

import { DuzenlePage } from './duzenle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuzenlePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DuzenlePage],
})
export class DuzenlePageModule {}
