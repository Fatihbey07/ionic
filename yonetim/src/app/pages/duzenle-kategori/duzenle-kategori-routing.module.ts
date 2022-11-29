import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuzenleKategoriPage } from './duzenle-kategori.page';

const routes: Routes = [
  {
    path: '',
    component: DuzenleKategoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuzenleKategoriPageRoutingModule {}
