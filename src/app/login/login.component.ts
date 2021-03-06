import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  invalidLogin: boolean;
  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.http
      .post("http://3.120.187.220:7000/api/v1/auth/login", credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .subscribe(
        (response) => {
          console.log(response);
          let token = (<any>response).token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/Home"]);
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
  }
  ngOnInit(): void {}
}
