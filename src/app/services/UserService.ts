import { User } from './../entity/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = `http://localhost:3000/users`

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    const config = { 
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
        observe: 'response' }
  
        return this.http.post<any>("http://localhost:3000/login",
        JSON.stringify(user), {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    })

  }


  public getById(id: string): Observable < User > {
  return this.http.get<User>(API + "/" + id);
}

  public getAll(): Observable < User[] > {
  return this.http.get<User[]>(API);
}

  public create<User>(user: User): Observable < User > {
  const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  return this.http.post<User>(API + "/create", JSON.stringify(user), config)
}

  public update<User>(user: User): Observable < User > {
  const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  return this.http.put<User>(API, JSON.stringify(user), config)
}

  public delete (id: string) {
  return this.http.delete(API + "/" + id);
}


}