import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ErrComponent } from '../err/err.component';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers :[],
  exports : []
})
export class LoginModule { }
