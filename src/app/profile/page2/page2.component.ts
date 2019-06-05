import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  form2:FormGroup = new FormGroup({
    country : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required),
    ip : new FormControl('', Validators.required),
    latitude : new FormControl('', Validators.required),
    longitude : new FormControl('', Validators.required)
  });


  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  submit(){
    if(this.form2.valid){
      localStorage.setItem('form2',JSON.stringify(this.form2.value));
      this.router.navigate(['profile/page3']);
    }
  }
}
