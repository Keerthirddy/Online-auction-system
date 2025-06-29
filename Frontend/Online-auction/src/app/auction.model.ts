// src/app/models/auction.model.ts

export interface Auction {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  currentBid: number;
  timeLeft: string;
  category: string;
  status: 'featured' | 'ongoing';
  bids: Bid[];
  startingBid: number;
  bidIncrement: number;
  endTime: Date;
}
