import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecimPageRoutingModule } from './secim-routing.module';

import { SecimPage } from './secim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecimPageRoutingModule
  ],
  declarations: [SecimPage]
})
export class SecimPageModule {}
