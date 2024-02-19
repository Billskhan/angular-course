import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
@Input({required:true}) course!:Course;
@Output() buttonevent = new EventEmitter<Course>();

  constructor(){
    //this.courses = {} as Course;
  }

  buttonClick(){
    this.buttonevent.emit(this.course)
  }
}

