import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
})
export class SingleCategoryComponent {
  @Input() category: ICategory | null = null;
  @Output() categorySelected = new EventEmitter<ICategory>();
  @Output() editCategory = new EventEmitter<ICategory>();

  onCategorySelect() {
    this.category &&
    this.categorySelected.emit(this.category);
  }

  onEditCategory() {
    this.category &&
    this.editCategory.emit(this.category);
  }
}
