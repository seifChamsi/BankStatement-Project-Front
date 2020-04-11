import { JwtHelperService } from "@auth0/angular-jwt";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}
  currentUser;
  ngOnInit(): void {}

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
