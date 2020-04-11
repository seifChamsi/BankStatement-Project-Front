import { AuthGuardService } from "./guards/auth-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, Router, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { StatementComponent } from "./statement/statement.component";
import { StatementTableComponent } from "./statement-table/statement-table.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { StarterPageComponent } from "./starter-page/starter-page.component";
import { SignupComponent } from "./signup/signup.component";
import { JwtModule } from "@auth0/angular-jwt";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

const appRoutes: Routes = [
  {
    path: "StarterPage",
    component: StarterPageComponent,
    canActivate: [AuthGuardService],
  },
  { path: "Home", component: HomeComponent },
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },

  {
    path: "PostStatement",
    component: StatementComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "GetStatement",
    component: StatementTableComponent,
    canActivate: [AuthGuardService],
  },
  { path: "", component: StarterPageComponent },
];

export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    StatementComponent,
    StatementTableComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    StarterPageComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ["54.172.34.102:7000"],
        blacklistedRoutes: [],
      },
    }),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
