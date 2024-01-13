import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [
    { id: 1, title: 'Category 1', description: 'Category Description 1' },
  ];

  constructor() {}
  ngOnInit() {}

  onCategoryAdded(category: ICategory) {
    category.id = this.categories.length + 1;
    this.categories.push(category);
  }
}
