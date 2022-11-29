import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { DataService } from 'src/app/services/data.service';
import { MytoastService } from 'src/app/services/mytoast.service';

@Component({
  selector: 'app-ekle-kategori',
  templateUrl: './ekle-kategori.page.html',
  styleUrls: ['./ekle-kategori.page.scss'],
})
export class EkleKategoriPage implements OnInit {
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
    public toast: MytoastService,
    public http: HttpClient,
    public router: Router
  ) {}

  ngOnInit() {
    this.KategoriListele();
  }
  KategoriListele() {
    this.servis.KategoriListele().subscribe((d) => {
      this.kategoriler = d;
    });
  }
  KategoriEkle() {
    var kat: Kategori = this.frm.value;
    var tarih = new Date();
    var filtre = this.kategoriler.filter((s) => s.adi == kat.adi);
    if (!kat.adi) {
      this.toast.toastUygula('Kategori Adı boş geçilemez');
      this.frm.reset();
    } else {
      if (filtre.length > 0) {
        this.toast.toastUygula('Kategori Mevcut');
        this.frm.reset();
      } else {
        kat.kaytarih = tarih.getTime().toString();
        kat.duztarih = tarih.getTime().toString();
        this.servis.KategoriEkle(kat).subscribe((d) => {
          this.toast.toastUygula('Kategori Eklendi.');
          this.KategoriListele();
          this.frm.reset();
        });
      }
    }
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
