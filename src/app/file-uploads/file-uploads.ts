import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  progress: number;
  uploaded: boolean;
}

@Component({
  selector: 'app-file-uploads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-uploads.html',
})
export class FileUploadsComponent {

  // Final uploaded list
  uploadedFiles = signal<UploadedFile[]>([]);

  // Temporary selected files (before submit)
  pendingFiles = signal<File[]>([]);

  dragOver = signal(false);

  // When file is selected or dropped → store in pending
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);
      this.pendingFiles.update(f => [...f, ...files]);
      input.value = ''; // reset
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver.set(false);
    const dt = event.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      const files = Array.from(dt.files);
      this.pendingFiles.update(f => [...f, ...files]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragOver.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragOver.set(false);
  }

  // 🚀 Submit button → start uploading
  submitFiles() {
    const files = this.pendingFiles();

    files.forEach(file => {
      const uploadFile: UploadedFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        uploaded: false,
      };

      this.uploadedFiles.update(list => [...list, uploadFile]);
      this.simulateUpload(uploadFile);
    });

    // Clear pending queue
    this.pendingFiles.set([]);
  }

  // Fake upload animation
  private simulateUpload(file: UploadedFile) {
    const interval = setInterval(() => {
      file.progress += Math.random() * 15;

      if (file.progress >= 100) {
        file.progress = 100;
        file.uploaded = true;
        clearInterval(interval);
      }

      this.uploadedFiles.update(f => [...f]);
    }, 200);
  }

  removeFile(fileToRemove: UploadedFile) {
    this.uploadedFiles.update(files =>
      files.filter(file => file !== fileToRemove)
    );
  }

  clearAllFiles() {
    this.uploadedFiles.set([]);
  }

  formatFileSize(bytes: number): string {
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
