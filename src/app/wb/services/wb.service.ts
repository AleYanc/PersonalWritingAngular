import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wb } from '../wb.interface';
import { WbCategory } from '../wb-category.interface';

@Injectable({
  providedIn: 'root'
})
export class WbService {
  private apiUrl='https://localhost:7191/api'

  constructor(private http: HttpClient) { }

  getWorldBuildings(listOfIds?:string) {
    if(listOfIds) {
      return this.http.get<Wb[]>(`${this.apiUrl}/wb/GetTotalItemsInArray?${listOfIds}`)
    } else {
      return this.http.get<Wb[]>(`${this.apiUrl}/wb`)
    }
  }

  getWbCategories() {
    return this.http.get<WbCategory[]>(`${this.apiUrl}/worldBuildingCategories`)
  }

  getWb(id:string|null) {
    return this.http.get<Wb>(`${this.apiUrl}/wb/${id}`)
  }

  postWb(wb:Wb) {
    return this.http.post(`${this.apiUrl}/wb`, wb)
  }

  updateWb(wb:Wb, id:string|null) {
    return this.http.put(`${this.apiUrl}/wb/${id}`, wb)
  }

  deleteWb(id:number) {
    return this.http.delete(`${this.apiUrl}/wb/${id}`)
  }
}
