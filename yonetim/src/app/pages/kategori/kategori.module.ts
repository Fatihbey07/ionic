import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriPageRoutingModule } from './kategori-routing.module';

import { KategoriPage } from './kategori.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [KategoriPage],
})
export class KategoriPageModule {}
