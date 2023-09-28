import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from '../note.interface';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  private noteId?: string | null
  private noteToEdit?: Note
  public noteForm: FormGroup = new FormGroup({})

  constructor(private notesService: NotesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.noteId = this.route.snapshot.paramMap.get('id')
      this.notesService.getNote(this.noteId)
        .subscribe(r => {
          this.noteToEdit = r
          this.noteForm.reset(this.noteToEdit)
        })
    }

    this.noteForm = new FormGroup({
      title: new FormControl<string>(''),
      content: new FormControl<string>(''),
      type: new FormControl<string>('')
    })

    if (this.noteId) this.noteForm.addControl('id', new FormControl<string | null>(this.noteId))
  }

  get currentForm(): Note {
    const note = this.noteForm.value as Note
    return note
  }

  onSubmit() {
    if (this.noteId) {
      this.notesService.updateNote(this.currentForm, this.noteId)
        .subscribe(r => this.router.navigate(['/notes']))
    } else {
      this.notesService.postNote(this.currentForm)
        .subscribe(r => this.router.navigate(['/notes']))
    }
  }

}
