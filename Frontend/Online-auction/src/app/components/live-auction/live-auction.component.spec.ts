import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveAuctionsComponent } from './live-auction.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LiveAuctionsComponent', () => {
  let component: LiveAuctionsComponent;
  let fixture: ComponentFixture<LiveAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveAuctionsComponent],
      imports: [FormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // allows app-auction-card
    }).compileComponents();

    fixture = TestBed.createComponent(LiveAuctionsComponent);
    component = fixture.componentInstance;

    // Mock data
    component.liveAuctions = [
      {
        id: 1,
        title: 'Test Auction',
        description: 'Test Description',
        imageUrl: 'test.jpg',
        currentBid: 100,
        category: 'Test',
        timeLeft: '120',
        isLive: true
      }
    ];

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display live auctions', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-title').textContent).toContain('Live Auctions');
  });
});
