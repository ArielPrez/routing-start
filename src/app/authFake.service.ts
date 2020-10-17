import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
// This class fake the authentification service for an app
    loggedIn = false;
    isAuthenticated(){
        // This fake the time that take to the app to
        //  receive the authtentification from the server.
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
}
