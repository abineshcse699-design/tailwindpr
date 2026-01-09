import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ ONLY these
  templateUrl: './userprofile.html'
})
export class Userprofile {

  isEditMode = false;

  user = {
    firstName: 'Johnerg',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Engineering',
    role: 'Senior Developer',
    bio: 'Passionate about building scalable web applications and exploring new technologies.'
  };

  editUser = { ...this.user };

  edit() {
    this.isEditMode = true;
    this.editUser = { ...this.user };
  }

  save() {
    this.user = { ...this.editUser };
    this.isEditMode = false;
  }

  cancel() {
    this.isEditMode = false;
  }
}
