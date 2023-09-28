import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/characters/services/characters.service';
import { SkillsService } from '../skills.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CharacterSimple } from 'src/app/characters/character-simple.interface';
import { Skill } from '../skills.interface';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
  public characterList: CharacterSimple[] = []
  public skillForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private characterService: CharactersService, private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.characterService.getCharacterSimple()
      .subscribe(r => this.characterList = r)

    this.skillForm = new FormGroup({
      id: new FormControl<number>(0),
      characterId: new FormControl<number>(0),
      name: new FormControl(''),
      rank: new FormControl(''),
      description: new FormControl(''),
    })
  }

  get currentSkill(): Skill {
    const skill = this.skillForm.value as Skill
    return skill
  }

  onSubmit() {
    this.skillsService.postSkill(this.currentSkill)
      .subscribe(r => this.router.navigate([`character/${this.currentSkill.characterId}`]))
  }
}
