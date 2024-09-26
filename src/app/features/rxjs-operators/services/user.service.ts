import { Injectable } from '@angular/core';
import { IUser } from '../models/userinterface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISuperUser } from '../models/super-userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersApi = 'assets/users.json'
  private empApi = 'assets/employee.json'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersApi);
  }
  
  getSuperUsers(): Observable<ISuperUser[]> {
    return this.http.get<ISuperUser[]>(this.empApi);
  }

  getUserObjects(){
    const users$ = of(
      { id: 1, firstname: 'Alice', lastname: 'Johnson',membershiplevel: 'premium' },
      { id: 2, firstname: 'Bob', lastname: 'Smith',membershiplevel: 'premium' },
      { id: 3, firstname: 'Charlie', lastname: 'Brown',membershiplevel: 'premium' }
    );
    return users$;
  }
}
