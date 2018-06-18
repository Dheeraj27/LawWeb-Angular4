import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { appRouterModule } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,NoopAnimationsModule,BrowserAnimationsModule,FlexLayoutModule, MaterialModule, appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
