import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookSimple } from 'src/app/books/book-simple.interface';
import { BookServiceService } from 'src/app/books/services/book-service.service';
import { Chapter } from 'src/app/chapters/chapter.interface';
import { ChaptersService } from 'src/app/chapters/services/chapters.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit {
  public chapterBooksList?: BookSimple[]
  public filterForm: FormGroup = new FormGroup({})
  public query: string = ''
  public chapterList: Chapter[] = []
  public idArray: number[] = []
  public notFound: boolean = true

  constructor(private booksService: BookServiceService, private chaptersService: ChaptersService) { }

  ngOnInit(): void {
    this.booksService.getBooksSimple('books')
      .subscribe(r => this.chapterBooksList = r)

    this.filterForm = new FormGroup({
      filter: new FormControl<number[]>([])
    })

    this.searchChapters()
  }

  buildIdArray() {
    this.idArray = this.filterForm.get('filter')?.value
    this.buildQuery(this.idArray)
  }

  buildQuery(array: number[]) {
    this.query = ''
    array.forEach(el => {
      this.query += `listOfIds=${el}&`
    })
    this.searchChapters(this.query)
  }

  searchChapters(query?: string) {
    if (query) {
      this.chaptersService.getChaptersFiltered(query)
        .subscribe(r => {
          if(r.length > 0) {
            this.notFound = false
          } else {
            this.notFound = true
          }
          this.chapterList = r
        })
    } else {
      this.chaptersService.getChapters()
        .subscribe(r => {
          if(r.length > 0) {
            this.notFound = false
          } else {
            this.notFound = true
          }
          this.chapterList = r
        })
    }
  }
}
