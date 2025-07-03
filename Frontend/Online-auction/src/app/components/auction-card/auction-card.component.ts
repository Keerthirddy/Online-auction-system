import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Auction } from '../../models/auction.model';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css'],
})
export class AuctionCardComponent implements OnInit, OnDestroy {
  @Input() auction!: Auction;
  @Input() showLiveBadge: boolean = false;
  @Input() hideTimer: boolean = false;

  countdown: string = '';
  private interval: any;
  private secondsLeft: number = 0;

  ngOnInit(): void {
    if (!this.hideTimer) {
      this.secondsLeft = this.parseTimeLeftToSeconds(this.auction.timeLeft);
      this.updateCountdown();
      if (this.secondsLeft > 0) {
        this.interval = setInterval(() => {
          this.secondsLeft--;
          this.updateCountdown();
          if (this.secondsLeft <= 0) {
            clearInterval(this.interval);
          }
        }, 1000);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private parseTimeLeftToSeconds(timeLeft: string): number {
    if (!timeLeft) return 0;
    let hours = 0,
      minutes = 0;
    const hMatch = timeLeft.match(/(\d+)h/);
    const mMatch = timeLeft.match(/(\d+)m/);
    if (hMatch) hours = parseInt(hMatch[1], 10);
    if (mMatch) minutes = parseInt(mMatch[1], 10);
    return hours * 3600 + minutes * 60;
  }

  private updateCountdown(): void {
    if (this.secondsLeft <= 0) {
      this.countdown = 'Auction ended';
      return;
    }
    const hours = Math.floor(this.secondsLeft / 3600);
    const minutes = Math.floor((this.secondsLeft % 3600) / 60);
    const seconds = this.secondsLeft % 60;
    if (hours > 0) {
      this.countdown = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      this.countdown = `${minutes}m ${seconds}s`;
    } else {
      this.countdown = `${seconds}s`;
    }
  }
}
