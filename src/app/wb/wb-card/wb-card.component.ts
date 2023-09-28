import { Component, Input, OnInit } from '@angular/core';
import { Wb } from '../wb.interface';
import { Book } from 'src/app/books/book.interface';
import { BookServiceService } from 'src/app/books/services/book-service.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { WbService } from '../services/wb.service';

@Component({
  selector: 'app-wb-card',
  templateUrl: './wb-card.component.html',
  styleUrls: ['./wb-card.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class WbCardComponent implements OnInit {
  @Input()
  public wb!: Wb

  public book?: Book

  constructor(private bookService: BookServiceService, private confirmationService: ConfirmationService, private messageService: MessageService, private wbService: WbService) { }

  ngOnInit(): void {
    this.bookService.getBook(`books/${this.wb.bookId}`)
      .subscribe(r => this.book = r)
  }

  confirm1(wbId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Deleting WorldBuilding...' });
        setTimeout(() => {
          this.wbService.deleteWb(wbId)
            .subscribe(r => this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'WorldBuilding Deleted!' }));
        }, 500);
        setTimeout(() => {
          window.location.reload()
        }, 1000);
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
