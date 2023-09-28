import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Wb } from 'src/app/wb/wb.interface';

@Component({
  selector: 'app-book-wb-dialog',
  templateUrl: './book-wb-dialog.component.html',
  styleUrls: ['./book-wb-dialog.component.scss'],
  providers: [DynamicDialogRef]
})
export class BookWbDialogComponent implements OnInit{
  public wb!:Wb

  constructor(public ref: DynamicDialogRef, private cd: ChangeDetectorRef, private config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.wb = this.config.data?.wb
  }
}
