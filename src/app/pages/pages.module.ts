import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksModule } from '../books/books.module';
import { PrimengModule } from '../primeng/primeng.module';
import { BookPageComponent } from './book-page/book-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharactersModule } from '../characters/characters.module';
import { SkillsModule } from '../skills/skills.module';
import { ChaptersPageComponent } from './chapters-page/chapters-page.component';
import { ChaptersModule } from '../chapters/chapters.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WbComponent } from './wb/wb.component';
import { WbModule } from '../wb/wb.module';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { NotesModule } from '../notes/notes.module';



@NgModule({
  declarations: [
    HomePageComponent,
    BookPageComponent,
    CharacterPageComponent,
    ChaptersPageComponent,
    WbComponent,
    NotesPageComponent
  ],
  imports: [
    CommonModule,
    BooksModule,
    PrimengModule,
    CharactersModule,
    SkillsModule,
    ChaptersModule,
    FormsModule,
    ReactiveFormsModule,
    WbModule,
    NotesModule
  ], exports: [
    HomePageComponent
  ]
})
export class PagesModule { }
