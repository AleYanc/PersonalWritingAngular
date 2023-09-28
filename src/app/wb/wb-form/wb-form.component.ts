import { Component, OnInit } from '@angular/core';
import { WbService } from '../services/wb.service';
import { BookServiceService } from 'src/app/books/services/book-service.service';
import { WbCategory } from '../wb-category.interface';
import { BookSimple } from 'src/app/books/book-simple.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Wb } from '../wb.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wb-form',
  templateUrl: './wb-form.component.html',
  styleUrls: ['./wb-form.component.scss']
})
export class WbFormComponent implements OnInit {
  public wbCategoryList: WbCategory[] = []
  public bookList: BookSimple[] = []
  public wbForm: FormGroup = new FormGroup({})
  public wbId: string|null = null
  public wbToEdit?:Wb

  constructor(private wbService: WbService, private bookService: BookServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') != null) {
      this.wbId = this.route.snapshot.paramMap.get('id')
      this.wbService.getWb(this.wbId)
        .subscribe(r => {
          this.wbToEdit = r
          this.wbForm.reset(this.wbToEdit)
        })
    }

    this.bookService.getBooksSimple('books')
      .subscribe(r => this.bookList = r)
    this.wbService.getWbCategories()
      .subscribe(r => this.wbCategoryList = r)

    this.wbForm = new FormGroup({
      name: new FormControl<string>(''),
      content: new FormControl<string>(''),
      bookId: new FormControl<number | null>(null),
      worldBuildingCategoryID: new FormControl<number | null>(null)
    })

    if (this.wbId != null) this.wbForm.addControl('id', new FormControl<string>(''))
  }

  get currentForm(): Wb {
    const wb = this.wbForm.value as Wb
    return wb
  }

  onSubmit() {
    if(this.wbId != null) {
      this.wbService.updateWb(this.currentForm, this.wbId)
        .subscribe(r => {
          this.router.navigate(['/wb'])
        })
    } else {
      this.wbService.postWb(this.currentForm)
      .subscribe(r => {
        this.router.navigate(['/wb'])
      })
    }
  }
}
