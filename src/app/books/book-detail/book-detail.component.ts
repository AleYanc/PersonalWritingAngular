import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Wb } from 'src/app/wb/wb.interface';
import { BookWbDialogComponent } from '../book-wb-dialog/book-wb-dialog.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  providers: [DialogService]
})
export class BookDetailComponent implements OnInit{
  private bookId?:string|null
  public bookResult:Book[] = []
  public loading:boolean = true
  public bookWbList:Wb[] = []
  ref: DynamicDialogRef | undefined;

  constructor(private bookService: BookServiceService, private route: ActivatedRoute, public dialogService: DialogService) {}

  ngOnInit(): void {

    this.bookId = this.route.snapshot.paramMap.get('id')
    this.bookService.getBook(`books/${this.bookId}`)
      .subscribe(r => this.bookResult[0] = r)
    setTimeout(() => {
      this.loading = false
    }, 500);

    this.bookService.getBookWB(this.bookId)
      .subscribe(r => {
        this.bookWbList = r
      })
  }

  get book() {
    return this.bookResult[0]
  }

  show(wb:Wb) {
    this.ref = this.dialogService.open(BookWbDialogComponent, {data: {wb: wb}})
  }
}
