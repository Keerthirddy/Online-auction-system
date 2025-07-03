import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SharedModule } from './shared/shared.module';
import { BiddingFormComponent } from './components/bidding-form/bidding-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // Removed AuctionCardComponent
    CategoriesComponent,
    CountdownComponent,
    FooterComponent,
    HomeComponent,
    // Removed LiveAuctionsComponent
    LoginComponent,
    NavbarComponent,
    CategoryCardComponent,
    BiddingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }