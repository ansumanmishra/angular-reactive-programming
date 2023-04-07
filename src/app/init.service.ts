import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class InitService {
    init() {
        console.log('InitService');
    }
}