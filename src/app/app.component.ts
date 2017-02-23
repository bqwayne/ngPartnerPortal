/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild, NgZone, Renderer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VdlIconRegistry, Category } from 'vdl-angular';
import { Router } from '@angular/router';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public _showInputContainer: boolean = false;
  @ViewChild('input') public inputElement: ElementRef;

  public navItems: Category[] = [
    {displayName: 'Home', route: 'home', icon: 'fa-home'},
    {
      displayName: 'Partners', route: 'partner', icon: 'fa-handshake-o',
      subCategories: [
        {displayName: 'Partners Home', route: 'partner', icon: 'fa-handshake-o'},
        {displayName: 'NAM List', route: 'partner-list', icon: 'fa-handshake-o'},
        {displayName: 'Types', route: 'partner-types', icon: 'fa-handshake-o'}
      ]
    },
    {
      displayName: 'About', route: 'about', icon: 'fa-info-circle',
      subCategories: [
        {displayName: 'Langing Page', route: 'about', icon: 'fa-info-circle'},
      ]
    },
  ];

  public selectedCategory: Category = this.navItems[0];

  constructor(vdlIconRegistry: VdlIconRegistry,
              private _sanitizer: DomSanitizer,
              private _renderer: Renderer,
              private _router: Router,
              private _ngZone: NgZone) {
    vdlIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    vdlIconRegistry.addSvgIcon('ux-veritas', _sanitizer.bypassSecurityTrustResourceUrl('/assets/img/ux-veritas.svg'));
    vdlIconRegistry.addSvgIcon('vtss', _sanitizer.bypassSecurityTrustResourceUrl('/assets/img/vtss.svg'));
  }

  public ngOnInit() {
    console.log('App has initialized!');
  }

  public categorySelected(category: Category) {
    console.log('categorySelected');
    this.selectedCategory = category;
    this._router.navigate([category.route]);
  }

  public alert(value: string) {
    alert(value);
  }

  public searchClick() {
    this._showInputContainer = true;

    // Give Angular a chance to create the input container and put focus on the input when shown
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this._renderer.invokeElementMethod(this.inputElement.nativeElement, 'focus', []));
    });
  }

  public inputSearchClick() {
    this._showInputContainer = false;
  }
}
