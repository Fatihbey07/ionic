import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EkleKategoriPage } from './ekle-kategori.page';

const routes: Routes = [
  {
    path: '',
    component: EkleKategoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EkleKategoriPageRoutingModule {}
