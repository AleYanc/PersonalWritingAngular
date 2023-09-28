import { Component, OnInit } from '@angular/core';
import { WbService } from '../services/wb.service';
import { Wb } from '../wb.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { BookSimple } from 'src/app/books/book-simple.interface';
import { BookServiceService } from 'src/app/books/services/book-service.service';

@Component({
  selector: 'app-wb-list',
  templateUrl: './wb-list.component.html',
  styleUrls: ['./wb-list.component.scss']
})
export class WbListComponent implements OnInit {
  public wbList: Wb[] = []
  private query: string = ''
  public filterForm: FormGroup = new FormGroup({})
  public wbBookList?: BookSimple[]
  public idArray: number[] = []

  constructor(private wbService: WbService, private booksService:BookServiceService) { }

  ngOnInit(): void {
    this.searchWb()
    this.booksService.getBooksSimple('books')
      .subscribe(r => this.wbBookList = r)

    this.filterForm = new FormGroup({
      filter: new FormControl<number[]>([])
    })
  }

  buildIdArray() {
    this.idArray = this.filterForm.get('filter')?.value
    this.buildQuery(this.idArray)
  }

  buildQuery(array: number[]) {
    this.query = ''
    array.forEach(el => {
      this.query += `listOfIds=${el}&`
    })
    this.searchWb(this.query)
  }

  searchWb(listOfIds?:string) {
    if(!listOfIds) {
      this.wbService.getWorldBuildings()
      .subscribe(r => this.wbList = r)
    } else {
      this.wbService.getWorldBuildings(this.query)
      .subscribe(r => this.wbList = r)
    }
  }
}
