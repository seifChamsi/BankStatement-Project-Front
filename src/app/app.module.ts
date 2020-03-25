import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { StatementComponent } from './statement/statement.component';
import { StatementTableComponent } from './statement-table/statement-table.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, StatementComponent, StatementTableComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
