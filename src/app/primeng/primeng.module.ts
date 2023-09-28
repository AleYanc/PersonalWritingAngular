import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ], exports: [
    MenubarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    EditorModule,
    CardModule,
    MultiSelectModule,
    ListboxModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
    MenuModule,
    DialogModule,
    ScrollPanelModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }
