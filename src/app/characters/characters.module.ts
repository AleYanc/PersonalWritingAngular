import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersFormComponent } from './characters-form/characters-form.component';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharactersFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    CharacterDetailComponent,
    CharacterListComponent
  ]
})
export class CharactersModule { }
