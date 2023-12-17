import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './center-div/layout/layout/layout.component';
import { NavBarComponent } from './center-div/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './center-div/layout/footer/footer.component';
import { HomePageComponent } from './center-div/screens/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
