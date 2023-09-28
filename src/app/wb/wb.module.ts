import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WbListComponent } from './wb-list/wb-list.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WbCardComponent } from './wb-card/wb-card.component';
import { WbFormComponent } from './wb-form/wb-form.component';



@NgModule({
  declarations: [
    WbListComponent,
    WbCardComponent,
    WbFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    WbListComponent
  ]
})
export class WbModule { }
