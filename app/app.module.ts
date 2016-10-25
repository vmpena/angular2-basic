import { NgModule }      from '@angular/core';
/*  Since this application is targeting a web browser,
    your root module needs to import BrowserModule from
    @angular/platform-browser and add it to the imports array. */
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from "./about.component";
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { Routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        Routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ContactComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }