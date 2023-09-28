import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../character.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/skills/skills.interface';
import { CharacterBook } from '../character-book.interface';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CharacterDetailComponent implements OnInit {
  public skills: Skill[] = []
  public characterBooks: CharacterBook[] = []
  public loading: boolean = true

  public character!: Character
  private charId: string | null = ''

  public goodTraits: string[] | undefined = []
  public badTraits: string[] | undefined = []

  constructor(private charactersService: CharactersService, private route: ActivatedRoute,
    private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.charId = this.route.snapshot.paramMap.get('id')
    this.charactersService.getCharacter(`characters/${this.charId}`)
      .subscribe(r => {
        this.character = r
        this.goodTraits = this.character?.goodTraits.split(',')
        this.badTraits = this.character?.badTraits.split(',')
      })

    this.charactersService.getCharacterSkills(`characters/${this.charId}/skills`)
      .subscribe(r => this.skills = r)

    this.charactersService.getCharacterBooks(`characters/${this.charId}/books`)
      .subscribe(r => this.characterBooks = r)

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  confirm1(charId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Deleting character...' });
        this.charactersService.deleteCharacter(charId).subscribe(r => {
          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'The character has been deleted. Redirecting to character list.' });
          setTimeout(() => {
            this.router.navigate(['/characters'])
          }, 1500);
        })
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }
}
