import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/Sonuc';
import { Uye } from 'src/app/models/Uye';
import { DataService } from 'src/app/services/data.service';
import { MytoastService } from 'src/app/services/mytoast.service';

@Component({
  selector: 'app-uye',
  templateUrl: './uye.page.html',
  styleUrls: ['./uye.page.scss'],
})
export class UyePage implements OnInit {
  uyeler!: Uye[];
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
  constructor(
    public servis: DataService,
    public router: Router,
    public toast: MytoastService
  ) {}

  ngOnInit() {
    this.UyeListele();
  }
  ionViewWillEnter() {
    this.UyeListele();
  }
  UyeListele() {
    this.servis.UyeListele().subscribe((d) => {
      this.uyeler = d;
    });
  }
  uyeEkle() {
    this.router.navigate(['ekle']);
  }
  uyeSil(uye: Uye) {
    this.servis.UyeSil(uye.id).subscribe((d) => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = 'Üye Silindi';
      this.toast.toastUygula(this.sonuc.mesaj);
      this.UyeListele();
    });
  }
  uye() {
    this.router.navigate(['uye']);
  }
  kategori() {
    this.router.navigate(['kategori']);
  }
  OturumKapat() {
    localStorage.clear();
    location.href = '/';
  }
}
