import { Component, OnInit } from '@angular/core';
import { Note } from '../note.interface';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class NoteDetailComponent implements OnInit{
  public note?:Note

  constructor(private notesService:NotesService, private route:ActivatedRoute, 
    private confirmationService: ConfirmationService, private messageService: MessageService, private router:Router) {}

  ngOnInit(): void {
    let id:string|null = this.route.snapshot.paramMap.get('id')
    this.notesService.getNote(id)
      .subscribe(r => this.note = r)
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Deleting note...' });
            this.notesService.deleteNote(`${this.note?.id}`)
              .subscribe(r => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Note deleted. Redirecting to note listing'})
                setTimeout(() => {
                  this.router.navigate(['/notes'])
                }, 500);
              })
        },
        reject: (type:ConfirmEventType) => {
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
