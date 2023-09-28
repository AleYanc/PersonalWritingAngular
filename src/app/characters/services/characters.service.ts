import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Character } from '../character.interface';
import { Skill } from 'src/app/skills/skills.interface';
import { CharacterBook } from '../character-book.interface';
import { Observable } from 'rxjs';
import { CharacterSimple } from '../character-simple.interface';

interface PostMessage {
  message:string
  characterId:number
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl='https://localhost:7191/api'
  private _searchResult:Character[] = []

  constructor(private http: HttpClient) { }

  get searchResult():Character[] {
    return [...this._searchResult]
  }

  getCharacters(endpoint:string) {
    this.http.get<Character[]>(`${this.apiUrl}/${endpoint}`)
      .subscribe( r=>
        this._searchResult = r
      )
  }

  getCharacter(endpoint:string): Observable<Character>{
    return this.http.get<Character>(`${this.apiUrl}/${endpoint}`)
  }

  getCharacterSimple() : Observable<CharacterSimple[]> {
    return this.http.get<CharacterSimple[]>(`${this.apiUrl}/characters/simple`)
  }

  getCharacterSkills(endpoint:string) {
    return this.http.get<Skill[]>(`${this.apiUrl}/${endpoint}`)
  }

  getCharacterBooks(endpoint:string) {
    return this.http.get<CharacterBook[]>(`${this.apiUrl}/${endpoint}`)
  }

  postCharacter(character:Character) {
    return this.http.post<Character>(`${this.apiUrl}/characters`, character)
  }

  updateCharacter(character:Character) {
    return this.http.put<Character>(`${this.apiUrl}/characters/${character.id}`, character)
  }

  deleteCharacter(id:number) {
    return this.http.delete(`${this.apiUrl}/characters/${id}`)
  }
}
