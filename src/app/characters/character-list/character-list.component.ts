import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../character.interface';
import { Message } from 'primeng/api/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  messages1: Message[] = [];
  loading: boolean = true

  constructor(private characterService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      let bookId = this.route.snapshot.paramMap.get('id')
      this.characterService.getCharacters(`books/${bookId}/characters`)
    } else {
      this.characterService.getCharacters(`characters`)
    }

    setTimeout(() => {
      this.loading = false
    }, 1500);

    this.messages1 = [
      { severity: 'info', summary: 'Info', detail: 'There are no characters for this book' },
    ];
  }

  get characters(): Character[] {
    return this.characterService.searchResult
  }
}
