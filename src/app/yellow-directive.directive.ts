import { InvokeFunctionExpr } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appYellowDirective]',
  standalone: true
})
export class YellowDirectiveDirective {
@Input() appYellowDirective='green';


  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseover') MouseOver(){
    this.el.nativeElement.style.backgroundColor = this.appYellowDirective;
   }

   @HostListener('mouseleave') MouseLeave(){
    this.el.nativeElement.style.backgroundColor = '';
   }

}
