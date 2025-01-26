import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from '@services/app.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private appService: AppService
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        console.log('AuthGuard');
        return this.getProfile();
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.canActivate(next, state);
    }

    async getProfile() {
        if (this.appService.user && this.appService.user.emailVerified) {
            console.log('AuthGuard: User is logged in');
            return true;
        }
        try {
            await this.appService.getProfile();
            if(this.appService.user && this.appService.user.emailVerified) {
                console.log('AuthGuard: User is logged in');
                return true;
            }
            console.log('AuthGuard: User is not logged in');
            //this.router.navigate(['/login']);
            return false;
        } catch (error) {
            console.log(error);
            //this.router.navigate(['/login']);
            return false;
        }
    }
}
