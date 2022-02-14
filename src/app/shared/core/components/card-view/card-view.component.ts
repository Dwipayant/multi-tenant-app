import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'esspl-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {

  @Input() list;
  viewType: "LIST" | "CARD" = "CARD";
  constructor() { }

}
