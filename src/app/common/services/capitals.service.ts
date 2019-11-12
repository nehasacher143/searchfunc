import { Injectable } from "@angular/core";
import { Capitals } from "../interfaces/capitals.interface";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CapitalsService {
  capitalsList: Array<Capitals> = [];
  constructor() {
    this.capitalsList = [
      {
        licenseNumber: "CDPH-10003551",
        businessName: "Cookies",
        cityCounty: "Mumbai",
        status: "Active",
        issueDate: "10/10/2019",
        expirationDate: "20/10/2019"
      },
      {
        licenseNumber: "CDPH-10003795",
        businessName: "DTI",
        cityCounty: "Mumbai",
        status: "Active",
        issueDate: "10/10/2019",
        expirationDate: "20/10/2019"
      },
      {
        licenseNumber: "CDPH-10003647",
        businessName: "CannDo Ventures",
        cityCounty: "Mumbai",
        status: "Active",
        issueDate: "10/10/2019",
        expirationDate: "20/10/2019"
      },
      {
        licenseNumber: "CDPH-10003407",
        businessName: "1400 Cherry Inc.",
        cityCounty: "Mumbai",
        status: "Active",
        issueDate: "10/10/2019",
        expirationDate: "20/10/2019"
      }
    ];
  }
  getCapitalsList() {
    return of(this.capitalsList);
  }
  getCapital(number: string) {
    let foundCapital: Capitals = {} as Capitals;
    this.capitalsList.forEach(capital => {
      if (capital.licenseNumber.toLowerCase() === number)
        foundCapital = capital;
    });
    return of(foundCapital);
  }
}
