import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuzenleKategoriPageRoutingModule } from './duzenle-kategori-routing.module';

import { DuzenleKategoriPage } from './duzenle-kategori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuzenleKategoriPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DuzenleKategoriPage],
})
export class DuzenleKategoriPageModule {}
