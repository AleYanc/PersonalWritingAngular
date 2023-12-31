import { Component, Input } from '@angular/core';
import { Note } from '../note.interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input()
  public note!:Note
}
