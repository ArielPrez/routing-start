import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
            CanActivate,
            RouterStateSnapshot
        } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authFake.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (userAuth: boolean) => {
                    if (userAuth) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
        return false;
    }
}
