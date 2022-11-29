import { Sonuc } from 'src/app/models/Sonuc';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Uye } from 'src/app/models/Uye';
import { DataService } from 'src/app/services/data.service';
import { MytoastService } from 'src/app/services/mytoast.service';

@Component({
  selector: 'app-ekle',
  templateUrl: './ekle.page.html',
  styleUrls: ['./ekle.page.scss'],
})
export class EklePage implements OnInit {
  constructor(
    private router: Router,
    public servis: DataService,
    public toast: MytoastService,
    public http: HttpClient
  ) {}
  uyeler!: Uye[];
  frm: FormGroup = new FormGroup({
    id: new FormControl(),
    adsoyad: new FormControl(),
    mail: new FormControl(),
    admin: new FormControl(),
    parola: new FormControl(),
    kaytarih: new FormControl(),
    duztarih: new FormControl(),
  });
  ngOnInit() {
    this.UyeListele();
  }
  UyeListele() {
    this.servis.UyeListele().subscribe((d) => {
      this.uyeler = d;
    });
  }

  UyeEkle() {
    var uye: Uye = this.frm.value;
    var tarih = new Date();
    if (!uye.adsoyad || !uye.parola || !uye.admin || !uye.mail) {
      this.toast.toastUygula('Alanlar boş geçilemez');
    }
    if (uye.mail) {
      var filtre = this.uyeler.filter((s) => s.mail == uye.mail);
      if (filtre.length > 0) {
        this.toast.toastUygula('Üye mevcut');
        this.frm.reset();
      } else {
        uye.kaytarih = tarih.getTime().toString();
        uye.duztarih = tarih.getTime().toString();
        this.servis.UyeEkle(uye).subscribe((d) => {
          this.toast.toastUygula('Üye Eklendi.');
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
