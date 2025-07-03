import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveAuctionsComponent } from './live-auction.component';

const routes: Routes = [
  { path: '', component: LiveAuctionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveAuctionRoutingModule { }
