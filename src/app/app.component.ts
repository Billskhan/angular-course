import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CoursesComponent } from "./courses/courses.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CourseCardComponent, CoursesComponent]
})
export class AppComponent {
  title = 'angular-course';
  
  courses:Course[] = COURSES;
  // car:any;
constructor(){}
 
ViewCard(value:string){
  alert('Event received ' + value)
}


viewCourseRoot(course: string){
  console.log("Viwe course button clicked - Root", course);
  
}


}
