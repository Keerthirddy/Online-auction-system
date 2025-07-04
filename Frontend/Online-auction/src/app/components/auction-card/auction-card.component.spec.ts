import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionCardComponent } from './auction-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AuctionCardComponent', () => {
  let component: AuctionCardComponent;
  let fixture: ComponentFixture<AuctionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionCardComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionCardComponent);
    component = fixture.componentInstance;

    component.auction = {
      id: 1,
      title: 'Test Product',
      imageUrl: 'test.jpg',
      description: 'This is a test auction',
      currentBid: 100,
      category: 'Electronics',
      timeLeft: '60',
      isLive: true
    };
    component.showLiveBadge = true;
    component.hideTimer = false;
    component.countdown = '00:01:00';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display auction title and current bid', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.auction-title').textContent).toContain('Test Product');
    expect(compiled.querySelector('.current-bid').textContent).toContain('$100');
  });

  it('should show live badge if auction is live', () => {
    const liveBadge = fixture.debugElement.query(By.css('.live-badge'));
    expect(liveBadge).toBeTruthy();
  });

  it('should show countdown timer when not hidden', () => {
    component.hideTimer = false;
    component.countdown = '00:01:00';
    fixture.detectChanges();
    const timeLeft = fixture.debugElement.query(By.css('.time-left'));
    expect(timeLeft.nativeElement.textContent).toContain('00:01:00');
  });

  it('should render "Place Bid" button when auction is live', () => {
    const button = fixture.debugElement.query(By.css('a.btn.btn-primary'));
    expect(button.nativeElement.textContent).toContain('Place Bid');
  });

  it('should render "View Details" button when auction is not live', () => {
    component.auction.isLive = false;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('a.btn.btn-primary'));
    expect(button.nativeElement.textContent).toContain('View Details');
  });
});
