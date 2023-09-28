import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../services/chapters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from '../chapter.interface';
import { ChapterNav } from '../chapter-nav.interface';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.scss']
})
export class ChapterDetailComponent implements OnInit {
  public chapter!:Chapter
  public chapterNavigationList:ChapterNav[] = []
  public loading:boolean = true
  public notFound:boolean = false

  constructor(private chaptersService:ChaptersService, private route:ActivatedRoute, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
   };
  }

  ngOnInit(): void {
    let id:string|null = this.route.snapshot.paramMap.get('id')
    this.chaptersService.getChapter(id)
      .subscribe(
        (r) => {
          this.chapter = r
          this.chaptersService.getChapterNavigation(this.chapter.bookID, this.chapter.chapterNumber)
            .subscribe(r => {
              this.chapterNavigationList = r
            })
          this.loading = false
        }
      )
  }

  navigateToChapter(id:number) {
    this.router.navigate([`/chapters/read/${id}`])
  }

}
