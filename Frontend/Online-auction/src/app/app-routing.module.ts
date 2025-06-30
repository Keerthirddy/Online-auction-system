import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LiveAuctionsComponent } from './components/live-auction/live-auction.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'live-auctions', component: LiveAuctionsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
