import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../services/chapters.service';
import { BookServiceService } from 'src/app/books/services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookSimple } from 'src/app/books/book-simple.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Chapter } from '../chapter.interface';

@Component({
  selector: 'app-chapter-form',
  templateUrl: './chapter-form.component.html',
  styleUrls: ['./chapter-form.component.scss']
})
export class ChapterFormComponent implements OnInit{
  public bookList:BookSimple[] = []
  public chapterForm: FormGroup = new FormGroup({})
  public chapterId:string|null = ''
  public chapterToEdit?:Chapter

  constructor(private chapterService:ChaptersService, private booksService:BookServiceService, private router:Router, private route:ActivatedRoute) {}

  get currentChapter():Chapter {
    const chapter = this.chapterForm.value as Chapter
    return chapter
  }

  ngOnInit(): void {
    this.chapterId = this.route.snapshot.paramMap.get('id')

    if(this.chapterId) {
      this.chapterService.getChapter(this.chapterId)
        .subscribe(r => {
          this.chapterToEdit = r
          this.chapterForm.addControl('id', new FormControl<string|null>(this.chapterId))
          this.chapterForm.reset(this.chapterToEdit)
        }) 
    }

    this.booksService.getBooksSimple('books')
      .subscribe(
        r => this.bookList = r
      )

    this.chapterForm = new FormGroup({
      title: new FormControl<string>(''),
      synopsys: new FormControl<string>(''),
      bookId: new FormControl<number>(0)
    })
  }

  onSubmit():void {
    if(this.chapterId) {
      this.chapterService.updateChapter(this.currentChapter, this.chapterId)
        .subscribe( r => this.router.navigate(['chapters']))
    } else {
      this.chapterService.postChapter(this.currentChapter)
      .subscribe(
        r => this.router.navigate(['chapters'])
    )
    }
  }
}
