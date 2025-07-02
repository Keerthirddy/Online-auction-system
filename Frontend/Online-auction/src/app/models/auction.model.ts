 export interface Auction {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  currentBid: number;
  timeLeft: string;
  category: string;
  isLive?: boolean;
  endTime?: Date;
} 