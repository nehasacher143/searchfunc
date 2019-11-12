import { Component } from "@angular/core";
import { Capitals } from "../common/interfaces/capitals.interface";
import { CapitalsService } from "../common/services/capitals.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public selectedItems: Capitals = {} as Capitals;
  public errorMessage: string;
  constructor(private capitalsService: CapitalsService) {}
  onSearchChange(event) {
    const query = event.target.value.toLowerCase();
    if (query !== "") {
      this.capitalsService.getCapital(query).subscribe({
        next: response => {
          this.selectedItems = response;
          this.errorMessage = "";
          console.log(response);
          if (response.licenseNumber === undefined) {
            this.errorMessage = "Error: License Number not Found";
          }
        }
      });
    } else {
      this.errorMessage = "";
      this.selectedItems = {} as Capitals;
    }
  }
}
