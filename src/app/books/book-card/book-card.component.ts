import { Component, Input } from '@angular/core';
import { Book } from '../book.interface';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { BookServiceService } from '../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class BookCardComponent {
  @Input()
  public book!: Book

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private bookService: BookServiceService, private router: Router) { }

  confirm1(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.bookService.deleteBook(id)
          .subscribe(r => {
            this.messageService.add({ severity: 'info', summary: 'In process', detail: 'Deleting book...'});
            setTimeout(() => {
              this.messageService.add({ severity: 'success', summary: 'In process', detail: 'Book deleted successfully. Reloading page.'});
            }, 1000);
            setTimeout(() => {
              window.location.reload()
            }, 2500);
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
          default:
            break;
        }
      }
    });
  }
}
