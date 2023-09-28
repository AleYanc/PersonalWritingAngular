import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from '../chapter.interface';
import { Observable } from 'rxjs';
import { ChapterNav } from '../chapter-nav.interface';

@Injectable({
  providedIn: 'root'
})

export class ChaptersService {
  private apiUrl='https://localhost:7191/api'
  private _searchResult:Chapter[] = []

  constructor(private http: HttpClient) { }

  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(`${this.apiUrl}/chapters`)
  }

  getChapter(id:string|null): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.apiUrl}/chapters/${id}`)
  }

  getChaptersFiltered(query:string) {
    return this.http.get<Chapter[]>(`${this.apiUrl}/chapters/GetTotalItemsInArray?${query}`)
  }

  getChapterNavigation(bookId:number, chapNumber:number): Observable<ChapterNav[]> {
    return this.http.get<ChapterNav[]>(`${this.apiUrl}/chapters/getNav/${bookId}/${chapNumber}`)
  }

  postChapter(chapter:Chapter) {
    return this.http.post(`${this.apiUrl}/chapters`, chapter)
  }

  updateChapter(chapter:Chapter, id:string|null) {
    return this.http.put(`${this.apiUrl}/chapters/${id}`, chapter)
  }
}
