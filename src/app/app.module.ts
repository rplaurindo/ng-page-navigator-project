import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { NgPageBrowserModule } from '@actjs.on/ng-page-browser';
import { NgPageBrowserModule } from 'projects/ng-page-browser/public-api';


@NgModule({
    imports: [
        // BrowserModule,
        // , NgPageBrowserModule
        NgPageBrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
