import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[colorIn]'
})
export class ColorInDirective {

    constructor(elementRef: ElementRef, private renderer: Renderer) {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        renderer.setElementStyle(elementRef.nativeElement, 'background-color', color);
        renderer.setElementStyle(elementRef.nativeElement, 'margin-right', "5px");
    }

}