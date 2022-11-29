import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuzenlePage } from './duzenle.page';

const routes: Routes = [
  {
    path: '',
    component: DuzenlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuzenlePageRoutingModule {}
