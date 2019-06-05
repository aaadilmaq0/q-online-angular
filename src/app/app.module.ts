import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrComponent } from './err/err.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA9lITHYnriOuJVWw11Li7fMskBtkT7TS8",
    authDomain: "qonline-7c20b.firebaseapp.com",
    databaseURL: "https://qonline-7c20b.firebaseio.com",
    projectId: "qonline-7c20b",
    storageBucket: "qonline-7c20b.appspot.com",
    messagingSenderId: "974392621157",
    appId: "1:974392621157:web:47310e5ebbfe8761"
    }),
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
