import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionCardComponent } from './components/auction-card/auction-card.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LiveAuctionComponent } from './components/live-auction/live-auction.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionCardComponent,
    CategoriesComponent,
    CountdownComponent,
    FooterComponent,
    HomeComponent,
    LiveAuctionComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
