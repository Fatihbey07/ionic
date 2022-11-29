import { MytoastService } from './../../services/mytoast.service';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Kategori } from './../../models/Kategori';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duzenle-kategori',
  templateUrl: './duzenle-kategori.page.html',
  styleUrls: ['./duzenle-kategori.page.scss'],
})
export class DuzenleKategoriPage implements OnInit {
  secKat: Kategori = new Kategori();
  uyeId: number = 0;
  frm: FormGroup = new FormGroup({
    id: new FormControl(),
    adi: new FormControl(),
    kaytarih: new FormControl(),
    duztarih: new FormControl(),
  });
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public servis: DataService,
    public toast: MytoastService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.uyeId = p.id;
      this.kategorigetir();
    });
  }
  kategorigetir() {
    this.servis.KategoriById(this.uyeId).subscribe((d) => {
      this.secKat = d;
      this.frm.patchValue(d);
    });
  }

  kategorigit() {
    this.router.navigate(['kategori']);
  }

  KategoriDuzenle() {
    this.secKat = this.frm.value;
    this.servis.KategoriDuzenle(this.secKat).subscribe((d) => {
      this.toast.toastUygula('Kategori Düzenlendi.');
      this.kategorigit();
    });
  }
}
