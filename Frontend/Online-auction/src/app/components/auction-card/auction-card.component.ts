import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private dataUrl = 'assets/data/categories.json';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dataUrl);
  }

  getCategoryById(id: number): Observable<Category | undefined> {
    return this.http.get<Category[]>(this.dataUrl).pipe(
      map(categories => categories.find(category => category.id === id))
    );
  }

  getCategoryByKey(key: string): Observable<Category | undefined> {
    return this.http.get<Category[]>(this.dataUrl).pipe(
      map(categories => categories.find(category => category.key === key))
    );
  }
}