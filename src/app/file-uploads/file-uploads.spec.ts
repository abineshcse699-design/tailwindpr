import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadsComponent } from './file-uploads';

describe('FileUploadsComponent', () => {
  let component: FileUploadsComponent;
  let fixture: ComponentFixture<FileUploadsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
