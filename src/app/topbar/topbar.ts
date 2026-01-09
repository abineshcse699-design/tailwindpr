import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './topbar.html',
})
export class TopbarComponent {

  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToProfile() {
    this.isMenuOpen = false;
    this.router.navigate(['/profile']); // 👈 profile page
  }

  goToSettings() {
    this.isMenuOpen = false;
    this.router.navigate(['/settings']); // 👈 settings page
  }

  logout() {
    localStorage.removeItem('token');
    this.isMenuOpen = false;
    this.router.navigate(['/']); // 👈 go to Singleform (root)
  }

  // Outside click → dropdown close
  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.isMenuOpen = false;
    }
  }
}
