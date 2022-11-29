import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UyePage } from './uye.page';

const routes: Routes = [
  {
    path: '',
    component: UyePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UyePageRoutingModule {}
