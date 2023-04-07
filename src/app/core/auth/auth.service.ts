import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuthenticated = false;

    constructor(@Inject('BASE_URL') private readonly baseUrl: string, private readonly http: HttpClient) {
        console.log('AuthService');
        
        this.http.get<boolean>(this.baseUrl + 'login').pipe(
            tap(isAuthenticated => this.isAuthenticated = isAuthenticated),
            tap(isAuthenticated => console.log('isAuthenticated: ', isAuthenticated)),
            catchError(() => {
                this.isAuthenticated = false;
                return of(false);
            })
        ).subscribe();
    }
}