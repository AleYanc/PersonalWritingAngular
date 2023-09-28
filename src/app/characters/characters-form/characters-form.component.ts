import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookSimple } from 'src/app/books/book-simple.interface';
import { BookServiceService } from 'src/app/books/services/book-service.service';
import { Character } from '../character.interface';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters-form',
  templateUrl: './characters-form.component.html',
  styleUrls: ['./characters-form.component.scss']
})
export class CharactersFormComponent implements OnInit {
  public bookList: BookSimple[] = []
  public characterForm: FormGroup = new FormGroup({})
  public charId: string | null = null
  public characterToEdit?: Character
  private characterId: number = 0

  constructor(private booksService: BookServiceService, private characterService: CharactersService, private router: Router, private route: ActivatedRoute) { }

  get currentCharacter(): Character {
    const character = this.characterForm.value as Character
    return character
  }

  ngOnInit(): void {

    if (this.route.snapshot.paramMap.get('id') != null) {
      this.charId = this.route.snapshot.paramMap.get('id')
      this.characterService.getCharacter(`characters/${this.charId}`)
        .subscribe(
          r => {
            this.characterToEdit = r
            this.characterId = r.id
            this.characterForm.reset(this.characterToEdit)
          }
        )
    }

    this.booksService.getBooksSimple('books')
      .subscribe(r => this.bookList = r)

    this.characterForm = new FormGroup({
      //id: new FormControl<string>(''),
      imageUrl: new FormControl(''),
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(0),
      birthday: new FormControl(''),
      eyeColor: new FormControl(''),
      hairColor: new FormControl(''),
      skinColor: new FormControl(''),
      weight: new FormControl(0),
      height: new FormControl(0),
      goodTraits: new FormControl(''),
      badTraits: new FormControl(''),
      mainFear: new FormControl(''),
      mainWish: new FormControl(''),
      description: new FormControl(''),
      notes: new FormControl(''),
      bookIds: new FormControl<number[] | null>(null),
    })

    if(this.charId) this.characterForm.addControl('id', new FormControl<string>(''))
  }

  public formFields: string[] = [
    'imageUrl',
    'firstName',
    'middleName',
    'lastName',
    'age',
    'birthday',
    'eyeColor',
    'hairColor',
    'skinColor',
    'weight',
    'height',
    'mainFear',
    'mainWish'
  ]
  public textAreaFields: string[] = [
    'goodTraits',
    'badTraits',
  ]
  public richTextFields: string[] = [
    'description',
    'notes'
  ]

  onSubmit(): void {
    if (this.characterForm.invalid) return

    if (this.characterId) {
      //this.currentCharacter.id = this.characterId
      this.characterService.updateCharacter(this.currentCharacter)
        .subscribe(r => {
          this.router.navigate([`character/${this.characterId}`])
        })
    } else {
      this.characterService.postCharacter(this.currentCharacter)
        .subscribe(r => {
          this.router.navigate([`character/${r.id}`])
        })
    }
  }
}
