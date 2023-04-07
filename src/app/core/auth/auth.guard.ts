import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

export function authenticate() {
    const authService = inject(AuthService);
    console.log(authService.isAuthenticated);
    
    return authService.isAuthenticated;
}