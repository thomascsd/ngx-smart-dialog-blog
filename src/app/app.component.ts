import { Component, OnInit } from "@angular/core";
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private modalService: NgxSmartModalService) {}

  ngOnInit() {}

  openDialog() {
    this.modalService.getModal("dialog1").open();
  }

  openDialogLayer1() {
    this.modalService.getModal("dialog2").open();
  }
  openDialogLayer2() {
    this.modalService.getModal("dialog3").open();
  }
}
