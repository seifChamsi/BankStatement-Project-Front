import { JwtHelperService } from "@auth0/angular-jwt";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  jwtHelper: any;
  constructor(private router: Router, jwtHelper: JwtHelperService) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(["/Home"]);
  }

  goToPostStatement() {
    this.router.navigate(["/PostStatement"]);
  }

  goToStatement() {
    this.router.navigate(["/GetStatement"]);
  }

  goToStarterPage() {
    this.router.navigate(["/StarterPage"]);
    localStorage.removeItem("jwt");
  }

  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
      this.router.navigate(["Login"]);
    }
  }
}
