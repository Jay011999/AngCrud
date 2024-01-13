import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ViewComponentComponent } from './view-component/view-component.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    AddCategoryComponent,
    ViewComponentComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
