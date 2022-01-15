import { Component, OnInit } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public listItems: Array<string> = [
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
