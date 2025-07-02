import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionCardComponent } from './components/auction-card/auction-card.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LiveAuctionsComponent } from './components/live-auction/live-auction.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionCardComponent,
    CategoriesComponent,
    CountdownComponent,
    FooterComponent,
    HomeComponent,
    LiveAuctionsComponent,
    LoginComponent,
    NavbarComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
