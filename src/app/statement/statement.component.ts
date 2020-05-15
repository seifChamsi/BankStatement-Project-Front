import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "statement",
  templateUrl: "./statement.component.html",
  styleUrls: ["./statement.component.css"],
})
export class StatementComponent {
  obj;
  loading;
  @ViewChild("excelFile") excelFile;

  url = "http://3.120.187.220:7000/api/v1";
  MoisArr = [
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
  constructor(private http: HttpClient) {}

  CreateStatement(inputFile, nom, rib, mois, annee, format) {
    const file = <File>inputFile.files[0];
    this.loading = true;
    const formData = new FormData();
    formData.append("file", file);

    console.log(formData);

    formData.append("nom", nom.value);
    formData.append("rib", rib.value);
    formData.append("mois", mois.value);
    formData.append("annee", annee.value);
    formData.append("format", format.value);

    let headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    const httpOptions = { headers: headers };
    let token = localStorage.getItem("jwt");
    this.http
      .post(this.url + "/PostStatement", formData, httpOptions)
      .subscribe(
        (response) => {
          this.loading = false;
          console.log(response);
          Swal.fire("Done!", "Statement stored succuessfully", "success");
        },
        (error) => {
          console.log("here is error: " + error.message);
        }
      );
  }
}
