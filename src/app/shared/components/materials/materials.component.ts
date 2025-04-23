import { Component } from '@angular/core';

@Component({
  selector: 'app-materials',
  imports: [],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css'
})
export class MaterialsComponent {
  courseMaterials = [
    {
      src: 'icons/internet-user-software-engineer-programmer-software-developer-svgrepo-com.svg',
      title: 'Instructor',
      description: 'Basma Salim'
    },
    {
      src: 'icons/materials/time-svgrepo-com.svg',
      title: 'Duration',
      description: '3 weeks'
    },
    {
      src: 'icons/materials/books-svgrepo-com.svg',
      title: 'Lessons',
      description: '8'
    },
    {
      src: 'icons/materials/reading-book.png',
      title: 'Enrolled',
      description: '65 students'
    },
    {
      src: 'icons/materials/language-svgrepo-com.svg',
      title: 'Language',
      description: 'English'
    }
  ];

  // courseMaterials = [...this.originalMaterials, ...this.originalMaterials];
}
