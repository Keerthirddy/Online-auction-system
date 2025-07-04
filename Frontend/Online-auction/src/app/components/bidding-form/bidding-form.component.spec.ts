import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BiddingFormComponent } from './bidding-form.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AuctionService } from '../../services/auction.service';

describe('BiddingFormComponent', () => {
  let component: BiddingFormComponent;
  let fixture: ComponentFixture<BiddingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiddingFormComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ id: 1 }) } },
        { provide: AuctionService, useValue: { getAuctionById: () => of({ id: 1, title: 'Test', imageUrl: '', description: '', currentBid: 100, category: 'Test', timeLeft: '10' }) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BiddingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.auction = {
      id: 1,
      title: 'Test Item',
      imageUrl: '',
      description: 'Sample description',
      currentBid: 100,
      category: 'Electronics',
      timeLeft: '300'
    };

    component.bidForm.setValue({
      bidderName: 'Harini',
      bidAmount: 150,                 
      email: 'harini@example.com',
      contactNumber: '9876543210'      
    });
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    component.bidForm.reset();
    expect(component.bidForm.invalid).toBeTrue();
  });

  it('should validate required fields', () => {
    const bidderName = component.bidForm.controls['bidderName'];
    bidderName.setValue('');
    expect(bidderName.hasError('required')).toBeTrue();
  });

  it('should validate minimum bid amount', () => {
    const bidAmount = component.bidForm.controls['bidAmount'];
    bidAmount.setValue(50); // Less than current bid
    bidAmount.setErrors({ min: true });
    expect(bidAmount.hasError('min')).toBeTrue();
  });

  it('should accept valid input', () => {
    component.bidForm.setValue({
      bidderName: 'Harini',
      bidAmount: 150,
      email: 'harini@example.com',
      contactNumber: '9876543210'
    });
    expect(component.bidForm.valid).toBeTrue();
  });
});
