import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  countdown = '00:15:32';
  private interval: number | undefined;

  ngOnInit(): void {
    this.startCountdown();
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private startCountdown(): void {
    // Set 15 minutes 32 seconds from now
    const endTime = Date.now() + (15 * 60 + 32) * 1000;
    
    this.interval = setInterval(() => {
      const timeLeft = endTime - Date.now();
      
      if (timeLeft <= 0) {
        this.countdown = 'Auction Started!';
        clearInterval(this.interval);
        return;
      }
      
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      this.countdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }
} 