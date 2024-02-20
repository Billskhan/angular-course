import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
@Input({required:true}) course!:Course;
@Input() cardIndex!: number;
@Output() buttonevent = new EventEmitter<Course>();

  constructor(){
    //this.courses = {} as Course;
  }

  buttonClick(){
    this.buttonevent.emit(this.course)
  }
  isImageVisable(){
    return this.course.iconUrl
  }

  cardClasses():any{
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
    // return {
    //   'beginner': true,
    //   'intermediate': this.course.category=='INTERMEDIATE',
    // }
  }

}
