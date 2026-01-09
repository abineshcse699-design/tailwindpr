import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  status: 'active' | 'inactive';
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getTotalUsers() {
    return this.users.length;
  }

  getActiveUsers() {
    return this.users.filter(u => u.status === 'active').length;
  }

  getInactiveUsers() {
    return this.users.filter(u => u.status === 'inactive').length;
  }
}
