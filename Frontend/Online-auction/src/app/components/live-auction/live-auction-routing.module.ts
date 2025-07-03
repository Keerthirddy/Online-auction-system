import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveAuctionsComponent } from './live-auction.component';
import { BiddingFormComponent } from '../bidding-form/bidding-form.component';

const routes: Routes = [
  { path: '', component: LiveAuctionsComponent },
  { path: 'bids', component: BiddingFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveAuctionRoutingModule { }