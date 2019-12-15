import { User } from '../entity/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order } from '../entity/Order';

const API = `http://localhost:3000/orders`

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Order> {
    return this.http.get<Order>(API + "/" + id);
  }

  public getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(API);
  }
  
  public create<Order>(order: Order): Observable<Order> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Order>(API, JSON.stringify(order), config)
  }

  public update<Order>(order: Order): Observable<Order> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.put<Order>(API, JSON.stringify(order), config)
  }  
  
  public delete(id: string) {
    return this.http.delete(API + "/" + id);
  }

}