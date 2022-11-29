import { Sonuc } from './../../models/Sonuc';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../services/data.service';
import { MytoastService } from './../../services/mytoast.service';
import { Uye } from './../../models/Uye';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-duzenle',
  templateUrl: './duzenle.page.html',
  styleUrls: ['./duzenle.page.scss'],
})
export class DuzenlePage implements OnInit {
  constructor(
    public servis: DataService,
    public toast: MytoastService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  secUye: Uye = new Uye();
  uyeId: number = 0;
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
    this.route.params.subscribe((p: any) => {
      this.uyeId = p.id;
      this.uyegetir();
    });
  }
  uyegit() {
    this.router.navigate(['uye']);
  }
  uyegetir() {
    this.servis.UyeById(this.uyeId).subscribe((d) => {
      this.secUye = d;
      this.frm.patchValue(d);
    });
  }
  duzenle() {
    this.secUye = this.frm.value;
    this.servis.UyeDuzenle(this.secUye).subscribe((d) => {
      this.toast.toastUygula('Üye Düzenlendi.');
      this.uyegit();
    });
  }
}
