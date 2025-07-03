import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionService } from '../../services/auction.service';
import { Auction } from '../../models/auction.model';

@Component({
  selector: 'app-bidding-form',
  templateUrl: './bidding-form.component.html',
  styleUrls: ['./bidding-form.component.css']
})
export class BiddingFormComponent implements OnInit {
  bidForm!: FormGroup;
  auction: Auction | null = null;
  loading = true;
  error = '';

  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  auctionService = inject(AuctionService);


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.auctionService.getAuctionById(id).subscribe(auction => {
          this.auction = auction || null;
          this.loading = false;
          this.initForm();
        });
      } else {
        this.error = 'No auction selected.';
        this.loading = false;
      }
    });
  }

  initForm(): void {
    this.bidForm = this.fb.group({
      bidAmount: [null, [Validators.required, Validators.min(this.auction ? this.auction.currentBid + 1 : 1)]],
      bidderName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]]
    });
  }

  get bidAmount() { return this.bidForm.get('bidAmount'); }
  get bidderName() { return this.bidForm.get('bidderName'); }
  get email() { return this.bidForm.get('email'); }
  get contactNumber() { return this.bidForm.get('contactNumber'); }

  submitBid(): void {
    if (!this.auction) return;
    if (this.bidForm.invalid) {
      this.bidForm.markAllAsTouched();
      return;
    }
    // Here you would send the bid to the backend or update state
    alert(`Bid placed: $${this.bidAmount?.value} by ${this.bidderName?.value}\nEmail: ${this.email?.value}\nContact: ${this.contactNumber?.value}`);
    this.router.navigate(['/live-auctions']);
  }

  public cancel(): void {
    this.router.navigate(['/live-auctions']);
  }
}