import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    let authInfo = localStorage.getItem('email');

    if (authInfo == undefined) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
