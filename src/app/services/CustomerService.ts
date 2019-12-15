
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../entity/Customer';

const API = `http://localhost:3000/customers`

@Injectable({ providedIn: 'root' })
export class CustomerService {

    constructor(private http: HttpClient) { }
    public getById(id: string): Observable<Customer> {
      return this.http.get<Customer>(API + "/" + id);
    }
  
    public getAll(): Observable<Customer[]> {
      return this.http.get<Customer[]>(API);
    }

       
    public create<Customer>(customer: Customer): Observable<Customer> {
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      return this.http.post<Customer>(API, JSON.stringify(customer), config)
    }
  
    public update<Customer>(customer: Customer): Observable<Customer> {
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      return this.http.put<Customer>(API, JSON.stringify(customer), config)
    }  
    
    public delete(id: string) {
      return this.http.delete(API + "/" + id);
    }

   
}