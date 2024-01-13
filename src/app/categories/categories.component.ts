import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Models/ICategory';
import { log } from 'console';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [
    { id: 1, title: 'Category 1', description: 'Category Description 1' },
  ];

  selectedCategory: ICategory | null = null;
  editCategoryDetails: ICategory | null = null;
  constructor() {}
  ngOnInit() {}

  onCategoryAdded(category: ICategory) {
    category.id = this.categories.length + 1;
    this.categories.push(category);
  }

  onCategorySelected(category: ICategory) {
    this.selectedCategory = category;
    this.editCategoryDetails = null;
  }

  onEditCategory(category: ICategory) {
    this.editCategoryDetails = category;
    this.selectedCategory = null;
  }

  onUpdatedCategory(category: ICategory) {
    this.categories = this.categories.map((cat) => {
      if (category.id === cat.id) {
        return category;
      }
      return cat;
    });
  }
}
