import { Component, OnInit } from "@angular/core";
import { CapitalsService } from "../common/services/capitals.service";
import { Capitals } from "../common/interfaces/capitals.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  public selectedItem: Capitals;
  public selectedUuid: string;
  constructor(
    public capitalsService: CapitalsService,
    private route: ActivatedRoute
  ) {
    this.selectedUuid = route.snapshot.params.id;
  }

  ngOnInit() {
    this.capitalsService.getCapital(this.selectedUuid).subscribe({
      next: response => {
        this.selectedItem = response;
      }
    });
  }
}
