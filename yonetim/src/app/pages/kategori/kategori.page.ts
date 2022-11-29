import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { DataService } from 'src/app/services/data.service';
import { MytoastService } from 'src/app/services/mytoast.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {
  kategoriler!: Kategori[];
  secKat!: Kategori;
  sonuc: Sonuc = new Sonuc();
  frm: FormGroup = new FormGroup({
    id: new FormControl(),
    adi: new FormControl(),
    kaytarih: new FormControl(),
    duztarih: new FormControl(),
  });
  constructor(
    public servis: DataService,
    public router: Router,
    public toast: MytoastService
  ) {}

  ngOnInit() {
    this.KategoriListele();
  }
  ionViewWillEnter() {
    this.KategoriListele();
  }
  KategoriListele() {
    this.servis.KategoriListele().subscribe((d) => {
      this.kategoriler = d;
    });
  }
  kategoriekle() {
    this.router.navigate(['ekle-kategori']);
  }
  KategoriSil(kat: Kategori) {
    this.servis.KategoriSil(kat.id).subscribe((d) => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = 'Kategori Silindi';
      this.toast.toastUygula(this.sonuc.mesaj);
      this.KategoriListele();
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
