import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {
        label: 'Books',
        icon: 'pi pi-book',
        items: [
          {label: 'New book', icon: 'pi pi-plus', routerLink:'book/new'},
          {label: 'Book list', icon: 'pi pi-list', routerLink: '/'}
        ]
      },
      {
        label: 'Characters',
        icon: 'pi pi-users',
        items: [
          {label: 'New character', icon: 'pi pi-plus', routerLink: 'characters/new'},
          {label: 'Character list', icon: 'pi pi-list', routerLink: 'characters'},
          {label: 'Create skill', icon: 'pi pi-circle-fill', routerLink: 'skills/new'}
        ]
      },
      {
        label: 'Chapters',
        icon: 'pi pi-table',
        items: [
          {label: 'New chapter', icon: 'pi pi-plus', routerLink: 'chapters/new'},
          {label: 'Chapter list', icon: 'pi pi-list', routerLink: 'chapters'}
        ]
      },
      {
        label: 'World building',
        icon: 'pi pi-building',
        items: [
          {label: 'New WB', icon: 'pi pi-plus', routerLink: 'wb/new'},
          {label: 'WB list', icon: 'pi pi-list', routerLink: 'wb'}
        ]
      },
      {
        label: 'Notes',
        icon: 'pi pi-tablet',
        items: [
          {label: 'New note', icon: 'pi pi-plus', routerLink: 'notes/new'},
          {label: 'Note list', icon: 'pi pi-list', routerLink: 'notes'}
        ]
      }
    ]
  }
}
