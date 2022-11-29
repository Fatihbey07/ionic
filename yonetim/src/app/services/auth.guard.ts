import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public servis: DataService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var sonuc: boolean = false;
    if (this.servis.OturumKontrol()) {
      sonuc = true;
    } else {
      location.href = '/login';
    }
    return sonuc;
  }
}
