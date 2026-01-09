import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-singleform',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './singleform.html',
  styleUrls: ['./singleform.css'],
})
export class Singleform implements OnInit {

  isDark = false;
  hidePassword = true;

  loginObj = {
    emailId: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDark = savedTheme === 'dark';
      this.applyThemeClass();
    }
  }

  onLogin() {
    if (!this.loginObj.emailId || !this.loginObj.password) {
      this.snackBar.open(
        'Please enter email and password ⚠️',
        'Close',
        { duration: 3000 }
      );
      return;
    }

    this.http.post(
      'https://api.freeprojectapi.com/api/UserApp/login',
      this.loginObj
    ).subscribe({
      next: (res: any) => {

        // optional
        // localStorage.setItem('token', res.token);

        this.snackBar.open(
          'Login successful ✅',
          'Close',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          }
        );

        // 🚀 Redirect to dashboard
        this.router.navigate(['/admin/dashboard']);
      },
      error: () => {
        this.snackBar.open(
          'Invalid email or password ❌',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          }
        );
      }
    });
  }

toggleTheme() {
  this.isDark = !this.isDark;
  localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  this.applyThemeClass();
}

private applyThemeClass() {
  document.documentElement.classList.toggle('dark', this.isDark);
}


 
}
