import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  public bookToEdit!: Book
  public bookId: string | null = null
  public bookForm: FormGroup = new FormGroup({})

  constructor(private booksService: BookServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.bookId = this.route.snapshot.paramMap.get('id')
      this.booksService.getBook(`books/${this.bookId}`)
        .subscribe(r => {
          this.bookToEdit = r
          this.bookForm.reset(this.bookToEdit)
        })
    }

    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      coverUrl: new FormControl('')
    })
  }

  get currentBook(): Book {
    const book = this.bookForm.value as Book
    return book
  }

  onSubmit(): void {
    if (this.bookForm.invalid) return

    if (this.currentBook.id) {
      this.booksService.updateBook(this.currentBook)
        .subscribe(r => this.router.navigate([`book/${this.bookToEdit.id}`]))
    } else {
      this.booksService.postBook(this.currentBook)
        .subscribe(r => this.router.navigate([`/`]))
    }
  }
}
