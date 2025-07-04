import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  private dataUrl = 'assets/data/categories.json';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dataUrl);
  }

  getCategoryByKey(key: string): Observable<Category | undefined> {
    return this.getCategories().pipe(
      map(categories => categories.find((cat: Category) => cat.key === key))
    );
  }
}
