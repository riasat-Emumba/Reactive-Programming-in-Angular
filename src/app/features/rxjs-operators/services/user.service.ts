import { Injectable } from '@angular/core';
import { IUser } from '../models/userinterface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    const users: IUser[] = [
      { id: 1, firstname: 'Alice', lastname: 'Johnson', membershiplevel: 'premium' },
      { id: 2, firstname: 'Bob', lastname: 'Smith', membershiplevel: 'basic' },
      { id: 3, firstname: 'Charlie', lastname: 'Brown', membershiplevel: 'premium' }
    ];

    
    return of(users);
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
