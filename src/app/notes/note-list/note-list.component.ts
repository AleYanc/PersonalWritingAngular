import { Component, OnInit } from '@angular/core';
import { Note } from '../note.interface';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  public noteList:Note[] = []

  constructor(private notesService:NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes()
      .subscribe(r => this.noteList = r)
  }
}
