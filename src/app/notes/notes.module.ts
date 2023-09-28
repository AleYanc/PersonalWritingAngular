import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteFormComponent } from './note-form/note-form.component';



@NgModule({
  declarations: [
    NoteListComponent,
    NoteDetailComponent,
    NoteCardComponent,
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NoteListComponent
  ]
})
export class NotesModule { }
