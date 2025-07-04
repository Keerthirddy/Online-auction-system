import { Component, OnInit, inject } from '@angular/core';
import { AuctionService } from '../../services/auction.service';
import { Auction } from '../../models/auction.model';

@Component({
  selector: 'app-live-auctions',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.css']
})
export class LiveAuctionsComponent implements OnInit {
  liveAuctions: Auction[] = [];
  allLiveAuctions: Auction[] = [];
  loading = true;
  searchTerm = '';

  private auctionService = inject(AuctionService);

  ngOnInit(): void {
    this.loadLiveAuctions();
  }

  private loadLiveAuctions(): void {
    this.auctionService.getLiveAuctions().subscribe({
      next: (auctions) => {
        this.allLiveAuctions = auctions;
        this.liveAuctions = auctions;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading live auctions:', error);
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.liveAuctions = this.allLiveAuctions;
      return;
    }
    this.liveAuctions = this.allLiveAuctions.filter(auction =>
      auction.title.toLowerCase().includes(term)
    );
  }

  onClearSearch(): void {
    this.searchTerm = '';
    this.liveAuctions = this.allLiveAuctions;
  }
} 