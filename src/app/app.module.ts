import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import 'hammerjs';
import { VdlModule } from 'vdl-angular';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './app.routes';

// App is our top level component.  Import app specific components here
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PartnerComponent, PartnerListComponent, PartnerTypesComponent } from './partner';
import { AboutComponent } from './about';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnerComponent,
    PartnerListComponent,
    PartnerTypesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules}),
    VdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
