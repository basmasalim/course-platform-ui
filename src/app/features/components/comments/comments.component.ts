import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  commentsInfo = [
    {
      src: 'images/comment3.jpg',
      name: 'Student Name Gose Here',
      date: 'Oct 10,2021',
      comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!',
    },
    {
      src: 'images/comment2.jpg',
      name: 'Student Name Gose Here',
      date: 'Oct 15,2021',
      comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!',
    },
    {
      src: 'images/comment1.jpg',
      name: 'Student Name Gose Here',
      date: 'Oct 19,2021',
      comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!',
    },
  ]
}
