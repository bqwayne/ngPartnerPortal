import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-partner',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Partner Component has initialized!')
  }

}
