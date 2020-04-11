import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "starter-page",
  templateUrl: "./starter-page.component.html",
  styleUrls: ["./starter-page.component.css"]
})
export class StarterPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSignUp() {
    this.router.navigate(["/Signup"]);
  }
  goToLogin() {
    this.router.navigate(["/Login"]);
  }
}
