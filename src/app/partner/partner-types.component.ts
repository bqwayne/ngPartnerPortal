import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./partner-types.component.scss'],
  templateUrl: './partner-types.component.html'
})

export class PartnerTypesComponent implements OnInit {
  public ngOnInit() {
    console.log('App has initialized!');
  }
}