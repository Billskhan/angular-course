import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
@Input() appHighlight = '';

  constructor(private el: ElementRef) {

   }


@HostListener('mouseover') onMouseOver(){
   this.highlight(this.appHighlight || 'red');
} 

@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.backgroundColor = '';
}

highlight(color: string){
  this.el.nativeElement.style.backgroundColor = color;
}

}
