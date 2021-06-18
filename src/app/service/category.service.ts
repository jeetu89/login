import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {

  constructor(private http: HttpClient) { }
  addCategory(data) {
    return this.http.post(`${URL}addcategory`, data);
  }
  getCategory() {
    return this.http.get(`${URL}getcategory`);
  }
  delData(data) {
    return this.http.post(`${URL}delcategory`, data);
  }
}