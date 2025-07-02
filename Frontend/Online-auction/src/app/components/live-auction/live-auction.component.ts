import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../../services/auction.service';
import { Auction } from '../../models/auction.model';

@Component({
  selector: 'app-live-auctions',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.css']
})
export class LiveAuctionsComponent implements OnInit {
  liveAuctions: Auction[] = [];
  loading = true;

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.loadLiveAuctions();
  }

  private loadLiveAuctions(): void {
    this.auctionService.getLiveAuctions().subscribe({
      next: (auctions) => {
        this.liveAuctions = auctions;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading live auctions:', error);
        this.loading = false;
      }
    });
  }
} 