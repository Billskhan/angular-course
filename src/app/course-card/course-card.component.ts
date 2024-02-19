import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Course} from '../model/course';
import { NgFor, NgIf, CommonModule  } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, NgFor,CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  courseList: Course;
@Output() CourseViewEmiter = new EventEmitter();

constructor(){
  this.courseList = {} as Course;
}

ngOnInit(){

}

viewCourse(){
 console.log("View Course button Clicked - Course Card");
  this.CourseViewEmiter.emit(this.courseList);
}
cardStyles(){
  return {'text-decoration': 'underline'}
}
cardClasses(): any{
  if (this.courseList.category == 'BEGINNER') {
    return 'beginner';
  }
// return {
//   'course-card': true,
//   'beginner': this.courseList.category == 'BEGINNER'
//   };
}

//title:any;

//title = " Angular Core Deep Dive";
// imgSrc= "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png"
}
