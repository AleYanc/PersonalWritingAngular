import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Skill } from 'src/app/skills/skills.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl='https://localhost:7191/api'

  constructor(private http: HttpClient) { }

  postSkill(skill:Skill) {
    return this.http.post(`${this.apiUrl}/skills`, skill)
  }
}
