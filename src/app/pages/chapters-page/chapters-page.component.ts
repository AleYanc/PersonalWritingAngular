import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookSimple } from 'src/app/books/book-simple.interface';
import { BookServiceService } from 'src/app/books/services/book-service.service';
import { Chapter } from 'src/app/chapters/chapter.interface';
import { ChaptersService } from 'src/app/chapters/services/chapters.service';

@Component({
  selector: 'app-chapters-page',
  templateUrl: './chapters-page.component.html',
  styleUrls: ['./chapters-page.component.scss']
})
export class ChaptersPageComponent {
}
