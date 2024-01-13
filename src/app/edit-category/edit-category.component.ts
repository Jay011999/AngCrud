import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
})
export class EditCategoryComponent implements OnInit {
  ngOnInit(): void {}

  ngOnChanges() {
    this.title = this.category.title;
    this.description = this.category.description;
  }
  @Input() category!: ICategory;
  @Output() categoryUpdated = new EventEmitter<ICategory>();

  title: string = '';
  description: string = '';

  onUpdateCategory() {
    let category: ICategory = {
      id: this.category.id,
      title: this.title,
      description: this.description,
    };
    this.categoryUpdated.emit(category);
  }
}
