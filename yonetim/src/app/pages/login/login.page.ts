import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/Sonuc';
import { Uye } from 'src/app/models/Uye';
import { DataService } from 'src/app/services/data.service';
import { MytoastService } from 'src/app/services/mytoast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public router: Router,
    public dataServis: DataService,
    public toast: MytoastService
  ) {}

  ngOnInit() {}

  OturumAc(mail: any, parola: any) {
    this.dataServis.OturumAc(mail, parola).subscribe((d) => {
      if (d.length > 0 ) {
        var kayit: Uye = d[0];
        localStorage.setItem('adsoyad', kayit.adsoyad);
        localStorage.setItem('admin', kayit.admin.toString());
        location.href = '/secim';
      } else {
        var s: Sonuc = new Sonuc();
        s.islem = false;
        this.toast.toastUygula('E-Posta Adresi veya Parola Geçersizdir!');
      }
    });
  }
}
