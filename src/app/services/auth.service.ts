import { Injectable } from "@angular/core";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  isAuthenticated() {
    return this.angularFireAuth.authState;
  }

  fbAuth() {
    return this.login(new auth.FacebookAuthProvider());
  }

  googleAuth() {
    return this.login(new auth.GoogleAuthProvider());
  }

  login(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }
}
