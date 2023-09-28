import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { PrimengModule } from '../primeng/primeng.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookWbDialogComponent } from './book-wb-dialog/book-wb-dialog.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookCardComponent,
    BookDetailComponent,
    BookFormComponent,
    BookWbDialogComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    BookListComponent,
    BookDetailComponent
  ]
})
export class BooksModule { }
