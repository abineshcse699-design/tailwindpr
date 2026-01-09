import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from "./customer/customer";

import { GalleryComponent } from "./gallery/gallery";
import { EmailInboxComponent } from "./email-inbox/email-inbox";
import { FileUploadsComponent } from "./file-uploads/file-uploads";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projecttail2');
}
