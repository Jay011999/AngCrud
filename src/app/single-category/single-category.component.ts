import { Component, Input } from '@angular/core';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
})
export class SingleCategoryComponent {
  @Input() category: ICategory | null = null;

  onCategorySelect(){
    
  }
}
