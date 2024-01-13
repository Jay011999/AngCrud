import { Component, Input } from '@angular/core';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrl: './view-component.component.css',
})
export class ViewComponentComponent {
  @Input() category!: ICategory;
}
