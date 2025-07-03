import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAuctionsComponent } from './live-auction.component';
import { LiveAuctionRoutingModule } from './live-auction-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BiddingFormComponent } from '../bidding-form/bidding-form.component';

@NgModule({
  declarations: [LiveAuctionsComponent, BiddingFormComponent],
  imports: [
    CommonModule,
    LiveAuctionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LiveAuctionModule { }