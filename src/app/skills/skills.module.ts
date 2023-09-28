import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkillFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SkillsModule { }
