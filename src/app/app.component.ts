import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,CourseCardComponent ]
})
export class AppComponent {
  title = 'angular-course';

  courses: Course[] = COURSES;
  @ViewChild(CourseCardComponent)
  card!: CourseCardComponent;




  buttonEvent(value:any){
    console.log(this.card);
    
  }
  
}
