import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MytoastService {
  constructor(private toastController: ToastController) {}

  toastUygula(msj: string) {
    this.presentToast('bottom', msj);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
}
