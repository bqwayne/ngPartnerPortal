import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {
  public ngOnInit() {
    console.log('App has initialized!');
  }
}