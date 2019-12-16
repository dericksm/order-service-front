import { User } from '../entity/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order } from '../entity/Order';

const API = `http://localhost:3000/orders`



@Injectable({ providedIn: 'root' })
export class OrderService {

  getHeader() {
    return localStorage.getItem('Token')
  }
  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Order> {
    const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Order>(API + "/" + id, config);
  }

  public getAll(): Observable<Order[]> {
    const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Order[]>(API, config);
  }
  
  public create<Order>(order: Order): Observable<Order> {
    const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.post<Order>(API, JSON.stringify(order), config)
  }

  public update<Order>(order: Order): Observable<Order> {
    const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.patch<Order>(API, JSON.stringify(order), config)
  }  
  
  public delete(id: string) {
    const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.delete(API + "/" + id, config);
  }

}