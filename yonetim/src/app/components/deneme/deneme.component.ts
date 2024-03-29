import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sonuc } from 'src/app/models/Sonuc';
import { Uye } from 'src/app/models/Uye';
import { DataService } from 'src/app/services/data.service';
import { MytoastService } from 'src/app/services/mytoast.service';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss'],
})
export class DenemeComponent implements OnInit {
  uyeler!: Uye[];
  modalBaslik: string = '';
  secUye!: Uye;
  sonuc: Sonuc = new Sonuc();
  frm: FormGroup = new FormGroup({
    id: new FormControl(),
    adsoyad: new FormControl(),
    mail: new FormControl(),
    admin: new FormControl(),
    parola: new FormControl(),
    kaytarih: new FormControl(),
    duztarih: new FormControl(),
  });
  constructor(public servis: DataService, public toast: MytoastService) {}

  ngOnInit() {
    this.UyeListele();
  }
  Ekle(el: HTMLElement) {
    this.frm.reset();
    this.frm.patchValue({ admin: 0 });
  }
  Duzenle(uye: Uye, el: HTMLElement) {
    this.frm.patchValue(uye);
    this.modalBaslik = 'Üye Düzenle';
  }
  Sil(uye: Uye, el: HTMLElement) {
    this.secUye = uye;
    this.modalBaslik = 'Üye Sil';
  }

  UyeListele() {
    this.servis.UyeListele().subscribe((d) => {
      this.uyeler = d;
    });
  }
  UyeEkleDuzenle() {
    var uye: Uye = this.frm.value;
    var tarih = new Date();
    if (!uye.id) {
      var filtre = this.uyeler.filter((s) => s.mail == uye.mail);
      if (filtre.length > 0) {
        this.sonuc.islem = false;
        this.sonuc.mesaj = 'Girilen E-Posta Adresi Kayıtlıdır!';
        this.toast.toastUygula(this.sonuc.mesaj);
      } else {
        uye.kaytarih = tarih.getTime().toString();
        uye.duztarih = tarih.getTime().toString();
        this.servis.UyeEkle(uye).subscribe((d) => {
          this.sonuc.islem = true;
          this.sonuc.mesaj = 'Uye Eklendi';
          this.toast.toastUygula(this.sonuc.mesaj);
          this.UyeListele();
        });
      }
    } else {
      uye.duztarih = tarih.getTime().toString();
      this.servis.UyeDuzenle(uye).subscribe((d) => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = 'Üye Düzenlendi';
        this.toast.toastUygula(this.sonuc.mesaj);
        this.UyeListele();
      });
    }
  }
  UyeSil() {
    this.servis.UyeSil(this.secUye.id).subscribe((d) => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = 'Üye Silindi';
      this.toast.toastUygula(this.sonuc.mesaj);
      this.UyeListele();
    });
  }
}
