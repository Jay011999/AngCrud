import { Component, EventEmitter, Output } from '@angular/core';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  title: string = '';
  description: string = '';

  @Output() categoryAdded = new EventEmitter<ICategory>();

  onAddCategory() {
    let category: ICategory = {
      title: this.title,
      description: this.description,
    };
    this.categoryAdded.emit(category);
  }
}
