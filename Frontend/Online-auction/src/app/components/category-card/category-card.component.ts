import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Output() categoryClick = new EventEmitter<Category>();

  onClick() {
    this.categoryClick.emit(this.category);
  }
} 