import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl='https://localhost:7191/api'

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`)
  }

  getNote(id:string|null): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/notes/${id}`)
  }

  postNote(note:Note) {
    return this.http.post<Note>(`${this.apiUrl}/notes`, note)
  }

  updateNote(note:Note, id:string|null) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${id}`, note)
  }

  deleteNote(id:string) {
    return this.http.delete(`${this.apiUrl}/notes/${id}`)
  }
}
