import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthcheckRoutingService implements CanActivate {
    
    constructor(private router: Router) { }

    // 라우팅 모듈에서 사용
    // { path: '', component: comp, canActivate: [AuthcheckRoutingService] }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( sessionStorage.getItem('userId')) {
            // logged in so return true
            return true;
        }

        // 로그인이 안되었을 경우
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url} });
        return false;
    }
}