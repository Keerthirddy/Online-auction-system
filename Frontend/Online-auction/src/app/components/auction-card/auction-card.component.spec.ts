import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsListComponent } from './auction-card.component';
describe('AuctionsListComponent', () => {
  let component: AuctionsCardComponent;
  let fixture: ComponentFixture<AuctionsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionsCardComponent]
    });
    fixture = TestBed.createComponent(AuctionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
