import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Auction } from '../models/auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private dataUrl = 'assets/data/auctions.json';

  constructor(private http: HttpClient) { }

  getFeaturedAuctions(): Observable<Auction[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map(data => data.featuredAuctions || [])
    );
  }

  getOngoingAuctions(): Observable<Auction[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map(data => data.ongoingAuctions || [])
    );
  }

  getLiveAuctions(): Observable<Auction[]> {
    return this.getOngoingAuctions().pipe(
      map(auctions => auctions.filter(auction => auction.isLive))
    );
  }

  getAuctionsByCategory(category: string): Observable<Auction[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map(data => {
        const allAuctions = [...(data.featuredAuctions || []), ...(data.ongoingAuctions || [])];
        return allAuctions.filter(auction => auction.category === category);
      })
    );
  }

  getCategoryProducts(categoryKey: string): Observable<Auction[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map(data => data.categoryProducts?.[categoryKey] || [])
    );
  }

  getAuctionById(id: number): Observable<Auction | undefined> {
    return this.http.get<any>(this.dataUrl).pipe(
      map(data => {
        const allAuctions = [...(data.featuredAuctions || []), ...(data.ongoingAuctions || [])];
        return allAuctions.find(auction => auction.id === id);
      })
    );
  }
}