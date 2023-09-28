import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterCardComponent } from './chapter-card/chapter-card.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { ChapterFormComponent } from './chapter-form/chapter-form.component';


@NgModule({
  declarations: [
    ChapterListComponent,
    ChapterCardComponent,
    ChapterDetailComponent,
    ChapterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  exports: [
    ChapterListComponent
  ]
})
export class ChaptersModule { }
