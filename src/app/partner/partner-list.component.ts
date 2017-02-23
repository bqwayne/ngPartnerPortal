import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./partner-list.component.scss'],
  templateUrl: './partner-list.component.html'
})

export class PartnerListComponent implements OnInit {
  public ngOnInit() {
    console.log('App has initialized!');
  }
}