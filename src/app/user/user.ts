import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user.html'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  totalUsers = 0;
  activeUsers = 0;
  inactiveUsers = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.totalUsers = this.userService.getTotalUsers();
    this.activeUsers = this.userService.getActiveUsers();
    this.inactiveUsers = this.userService.getInactiveUsers();
  }
}
