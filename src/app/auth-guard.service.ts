import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
            CanActivate,
            CanActivateChild,
            RouterStateSnapshot
        } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authFake.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService,
                private router: Router){}

    // Protecting Routes with canActivate
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):
                Observable<boolean> |
                Promise<boolean> |
                boolean {
        return this.authService.isAuthenticated()
            .then(
                (userAuth: boolean) => {
                    if (userAuth) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                        return false;
                    }
                }
            );
    }
    // Protecting Child (Nested) Routes with canActivateChild
    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot):
                     Observable<boolean> |
                     Promise<boolean> |
                     boolean {
        return this.canActivate(route, state);
    }
}
