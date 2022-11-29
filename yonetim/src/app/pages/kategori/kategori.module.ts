import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriPageRoutingModule } from './kategori-routing.module';

import { KategoriPage } from './kategori.page';
import { HttpClientModule } from '@angular/common/http';
import { DenemeComponent } from 'src/app/components/deneme/deneme.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [KategoriPage, DenemeComponent],
})
export class KategoriPageModule {}
