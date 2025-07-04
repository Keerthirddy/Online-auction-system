import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuctionService } from '../../services/auction.service';
import { CategoryService } from '../../services/category.service';
import { Auction } from '../../models/auction.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  categoryAuctions: Auction[] = [];
  loading = true;
  showCategoriesOverview = true;

  categoryService = inject(CategoryService);
  auctionService = inject(AuctionService);
  route = inject(ActivatedRoute);
  router = inject(Router);


  ngOnInit(): void {
    this.loadCategories();
    
    // Subscribe to route query parameters
    this.route.queryParams.subscribe(params => {
      const categoryKey = params['category'];
      if (categoryKey) {
        this.selectCategory(categoryKey);
      } else {
        this.showCategoriesOverview = true;
        this.selectedCategory = null;
        this.categoryAuctions = [];
      }
    });
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.loading = false;
    });
  }

  onCategoryClick(category: Category): void {
    this.selectCategory(category.key);
  }

  private selectCategory(categoryKey: string): void {
    this.categoryService.getCategoryByKey(categoryKey).subscribe(category => {
      if (category) {
        this.selectedCategory = category;
        this.showCategoriesOverview = false;
        this.loadCategoryProducts(categoryKey);
        
        // Update URL with category parameter
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { category: categoryKey },
          queryParamsHandling: 'merge'
        });
        // Scroll to top after navigation
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
      }
    });
  }

  private loadCategoryProducts(categoryKey: string): void {
    this.auctionService.getCategoryProducts(categoryKey).subscribe(auctions => {
      this.categoryAuctions = auctions;
    });
  }

  showAllCategories(): void {
    this.selectedCategory = null;
    this.categoryAuctions = [];
    this.showCategoriesOverview = true;
    
    // Remove category parameter from URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      queryParamsHandling: 'merge'
    });
  }
} 