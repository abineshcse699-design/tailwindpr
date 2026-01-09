import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { UserService, User } from '../user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {


  constructor(private userService: UserService) {}


  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false
  };

  usersList: any[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Password not matching');
      return;
    }

    const newUser: User = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      status: 'active',
      role: 'user'
    };

    // save to shared service so Users page can display it
    this.userService.addUser(newUser);

    // also keep local table display if needed
    this.usersList.push({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    });

    // reset form
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      accept: false
    };
  }
}
