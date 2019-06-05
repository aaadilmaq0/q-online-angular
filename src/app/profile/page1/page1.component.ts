import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss"]
})
export class Page1Component implements OnInit {
  form1: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    avatar: new FormControl("", Validators.required)
  });

  avatar: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  setAvatar(value: string) {
    this.avatar = value;
    this.form1.get("avatar").setValue(value);
  }

  submit() {
    if(this.form1.valid){
      localStorage.setItem("form1", JSON.stringify(this.form1.value));
      this.router.navigate(["profile/page2"]);
    }
  }
}
