import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, map } from 'rxjs';

import { DataService } from '../../services/data.service';
import { Category }    from '../../models/category.model';
import { Auction }     from '../../models/auction.model';

@Component({
  selector   : 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls  : ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  /* state flags & streams */
  listMode = 'categories';          // 'categories' | 'products'
  categories$!: Observable<Category[]>;
  products$!  : Observable<Auction[]>;
  pageTitle   = '';                 // e.g. ELECTRONICS

  constructor(
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
        .pipe(
          switchMap(params => {
            const key = params.get('key');
            if (key) {
              /* ===========  products view  =========== */
              this.listMode  = 'products';
              this.pageTitle = key.replace('-', ' ').toUpperCase();
              this.products$ = this.ds.getProductsByCategory(key);
              return this.products$ as Observable<any>;
            } else {
              /* ===========  categories view  =========== */
              this.listMode   = 'categories';
              this.categories$ = this.ds.getCategories();
              return this.categories$ as Observable<any>;
            }
          })
        )
        .subscribe();   // stream is only needed to flip the flags
  }

  open(cat: Category) {
    this.router.navigate(['/categories', cat.key]);   // /categories/electronics
  }
}
