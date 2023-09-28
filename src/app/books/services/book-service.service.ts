import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Book } from '../book.interface';
import { BookSimple } from '../book-simple.interface';
import { Wb } from 'src/app/wb/wb.interface';
import { Chapter } from 'src/app/chapters/chapter.interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrl='https://localhost:7191/api'
  private _searchResult:Book[] = []

  constructor(private http: HttpClient) { }

  get searchResult():Book[] {
    return [...this._searchResult]
  }

  getBooks(endpoint:string) {
    this.http.get<Book[]>(`${this.apiUrl}/${endpoint}`)
      .subscribe( r=>
        this._searchResult = r
      )
  }

  getBooksSimple(endpoint:string) {
    return this.http.get<BookSimple[]>(`${this.apiUrl}/${endpoint}`)
  }

  getBookWB(id:string|null) {
    return this.http.get<Wb[]>(`${this.apiUrl}/books/${id}/wb`)
  }

  getBookChapters(id:string|null) {
    return this.http.get<Chapter[]>(`${this.apiUrl}/books/${id}/chapters`)
  }

  getBook(endpoint:string) {
    return this.http.get<Book>(`${this.apiUrl}/${endpoint}`)
  }

  postBook(book:Book) {
    return this.http.post<Book>(`${this.apiUrl}/books`, book)
  }

  updateBook(book:Book) {
    return this.http.put<Book>(`${this.apiUrl}/books/${book.id}`, book)
  }

  deleteBook(id:number) {
    return this.http.delete<Response>(`${this.apiUrl}/books/${id}`)
  }
}
