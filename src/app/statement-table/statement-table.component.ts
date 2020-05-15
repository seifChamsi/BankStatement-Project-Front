import { Component, OnInit, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-statement-table",
  templateUrl: "./statement-table.component.html",
  styleUrls: ["./statement-table.component.css"],
})
export class StatementTableComponent implements OnInit {
  TabMois = [
    { mois: "01", moisStr: "Janvier" },
    { mois: "02", moisStr: "Février" },
    { mois: "03", moisStr: "Mars" },
    { mois: "04", moisStr: "Avril" },
    { mois: "05", moisStr: "May" },
    { mois: "06", moisStr: "Juin" },
    { mois: "07", moisStr: "Juillet" },
    { mois: "08", moisStr: "Aout" },
    { mois: "09", moisStr: "Septembre" },
    { mois: "10", moisStr: "Octobre" },
    { mois: "11", moisStr: "Novembre" },
    { mois: "12", moisStr: "Decembbre" },
  ];
  tabAnnee = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];

  statement;
  loading;
  isHidden = true;
  hiddenForm = false;
  url = "http://3.120.187.220:7000/api/v1";
  statementLength;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  RenderTable(rib, mois, annee) {
    this.loading = true;
    let token = localStorage.getItem("jwt");
    let headers = new HttpHeaders();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    console.log(headers);
    let data = {
      rib: rib.value,
      mois: mois.value,
      annee: annee.value,
    };
    this.http
      .get(this.url + "/GetStatement", { params: data, headers: headers })
      .subscribe(
        (response) => {
          this.loading = false;
          this.statement = response;
          this.statementLength = this.statement.length;
          this.hiddenForm = true;
          this.isHidden = false;
          console.log(this.statement);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
