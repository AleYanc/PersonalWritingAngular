import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  constructor(private booksService: BookServiceService) {}

  ngOnInit(): void {
    this.booksService.getBooks('books')
  }

  get books(): Book[] {
    return this.booksService.searchResult
  }
}
