import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  CreateNewUser(signupForm: NgForm) {
    let credentials = JSON.stringify(signupForm.value);
    this.http
      .post("http://54.172.34.102:7000/api/v1/auth/signup", credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .subscribe(
        (response) => {
          console.log(response);
          Swal.fire(
            "Welcome!",
            "your subscription passed succuessfully!",
            "success"
          );
          this.router.navigate(["Login"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
