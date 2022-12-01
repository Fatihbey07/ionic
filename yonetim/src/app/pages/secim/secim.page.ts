import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secim',
  templateUrl: './secim.page.html',
  styleUrls: ['./secim.page.scss'],
})
export class SecimPage implements OnInit {
  constructor(public router: Router, public servis: DataService) {}

  ngOnInit() {}
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
