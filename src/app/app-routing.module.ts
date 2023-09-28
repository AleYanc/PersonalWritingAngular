import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersFormComponent } from './characters/characters-form/characters-form.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { SkillFormComponent } from './skills/skill-form/skill-form.component';
import { ChaptersPageComponent } from './pages/chapters-page/chapters-page.component';
import { ChapterDetailComponent } from './chapters/chapter-detail/chapter-detail.component';
import { ChapterFormComponent } from './chapters/chapter-form/chapter-form.component';
import { WbComponent } from './pages/wb/wb.component';
import { WbFormComponent } from './wb/wb-form/wb-form.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteFormComponent } from './notes/note-form/note-form.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'books/:id', component: BookPageComponent},
  {path: 'books/:id/characters', component: CharacterPageComponent},
  {path: 'book/new', component: BookFormComponent},
  {path: 'books/edit/:id', component: BookFormComponent},
  {path: 'character/:id', component: CharacterDetailComponent},
  {path: 'characters', component: CharacterPageComponent},
  {path: 'characters/new', component: CharactersFormComponent},
  {path: 'characters/edit/:id', component: CharactersFormComponent},
  {path: 'chapters', component: ChaptersPageComponent, pathMatch: 'full'},
  {path: 'chapters/read/:id', component: ChapterDetailComponent, pathMatch: 'full'},
  {path: 'chapters/new', component: ChapterFormComponent},
  {path: 'chapters/edit/:id', component: ChapterFormComponent},
  {path: 'skills/new', component: SkillFormComponent},
  {path: 'wb', component: WbComponent},
  {path: 'wb/new', component: WbFormComponent},
  {path: 'wb/edit/:id', component: WbFormComponent},
  {path: 'notes', component: NotesPageComponent},
  {path: 'note/:id', component: NoteDetailComponent},
  {path: 'notes/new', component: NoteFormComponent},
  {path: 'notes/edit/:id', component: NoteFormComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
