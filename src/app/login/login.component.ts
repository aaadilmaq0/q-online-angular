import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loaded: boolean = false;
  loading: string = "..";

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit() {
    setInterval(()=>{
      this.loading = this.loading + ".";
    },50);
    setTimeout(()=>{
      this.loaded = true;
      this.loading = "..";
      this.authService.isAuthenticated().subscribe(user=>{
        if(user)
          this.router.navigate(["profile/page1"]);
      });
    },2000);
  }

  login(loginWith:string){
    var log = (loginWith == 'facebook') ? this.authService.fbAuth() : this.authService.googleAuth();
    log.then((result)=>{
      if(result.credential['accessToken']){
        this.router.navigate(["/profile"]);
      }
    }).catch((error)=>{
      if(error.credential['accessToken']){
        this.router.navigate(["/profile"]);
      }
      else{
        console.log(error);
      }
    })
  }
}
