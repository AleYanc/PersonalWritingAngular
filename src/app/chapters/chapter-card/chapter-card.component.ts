import { Component, Input } from '@angular/core';
import { Chapter } from '../chapter.interface';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.scss']
})
export class ChapterCardComponent {
  @Input()
  public chapter!:Chapter
}
