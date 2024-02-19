import { Component, EventEmitter, Output } from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { CalculatorService } from '../calculator.service';
import { YellowDirectiveDirective } from '../yellow-directive.directive';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, NgIf, HighlightDirective, YellowDirectiveDirective],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
@Output() ViewCardEmitter = new EventEmitter<string>();


 


title = "Courses Page";
path = "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png";

isbutton = false;
color = 'green';
myCal = 0;


constructor(){}

viewCard(){
  alert('Button clicked');
  this.ViewCardEmitter.emit('Button Emitter ');
}

EnterMouse(){

}


colorgreen(){
  return 'red';
}

courses: Course[] = COURSES;
}
