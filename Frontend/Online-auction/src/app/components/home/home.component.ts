import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from '../../services/auction.service';
import { CategoryService } from '../../services/category.service';
import { Auction } from '../../models/auction.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredAuctions: Auction[] = [];
  ongoingAuctions: Auction[] = [];
  categories: Category[] = [];
  searchQuery = '';
  loading = true;

  private auctionService = inject(AuctionService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);

  

  ngOnInit(): void {
    this.loadFeaturedAuctions();
    this.loadOngoingAuctions();
    this.loadCategories();
  }

  private loadFeaturedAuctions(): void {
    this.auctionService.getFeaturedAuctions().subscribe((auctions) => {
      this.featuredAuctions = auctions;
      this.loading = false;
    });
  }

  private loadOngoingAuctions(): void {
    this.auctionService.getOngoingAuctions().subscribe((auctions) => {
      this.ongoingAuctions = auctions;
    });
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onCategoryClick(category: Category): void {
    this.router.navigate(['/categories'], {
      queryParams: { category: category.key },
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      //console.log('Searching for:', this.searchQuery); 
    }
  }
}
