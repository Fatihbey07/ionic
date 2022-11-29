import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'uye',
    loadChildren: () =>
      import('./pages/uye/uye.module').then((m) => m.UyePageModule),
  },
  {
    path: 'kategori',
    loadChildren: () =>
      import('./pages/kategori/kategori.module').then(
        (m) => m.KategoriPageModule
      ),
  },
  {
    path: 'ekle',
    loadChildren: () =>
      import('./pages/ekle/ekle.module').then((m) => m.EklePageModule),
  },
  {
    path: 'ekle-kategori',
    loadChildren: () =>
      import('./pages/ekle-kategori/ekle-kategori.module').then(
        (m) => m.EkleKategoriPageModule
      ),
  },
  {
    path: 'secim',
    loadChildren: () =>
      import('./pages/secim/secim.module').then((m) => m.SecimPageModule),
  },

  {
    path: 'duzenle/:id',
    loadChildren: () =>
      import('./pages/duzenle/duzenle.module').then((m) => m.DuzenlePageModule),
  },
  {
    path: 'duzenle-kategori/:id',
    loadChildren: () =>
      import('./pages/duzenle-kategori/duzenle-kategori.module').then(
        (m) => m.DuzenleKategoriPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
