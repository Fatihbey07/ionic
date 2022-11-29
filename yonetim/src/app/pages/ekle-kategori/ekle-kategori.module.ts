import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EkleKategoriPageRoutingModule } from './ekle-kategori-routing.module';

import { EkleKategoriPage } from './ekle-kategori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EkleKategoriPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EkleKategoriPage],
})
export class EkleKategoriPageModule {}
