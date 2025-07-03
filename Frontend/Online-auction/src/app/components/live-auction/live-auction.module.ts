import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAuctionsComponent } from './live-auction.component';
import { LiveAuctionRoutingModule } from './live-auction-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LiveAuctionsComponent],
  imports: [
    CommonModule,
    LiveAuctionRoutingModule,
    SharedModule
  ]
})
export class LiveAuctionModule { }
