// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionCardComponent } from '../components/auction-card/auction-card.component'; // adjust if path differs

@NgModule({
  declarations: [AuctionCardComponent],
  imports: [CommonModule],
  exports: [AuctionCardComponent] // 👈 So it can be reused in other modules
})
export class SharedModule { }
