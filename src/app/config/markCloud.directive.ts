import {Directive, ElementRef, HostListener, Renderer, Input} from "@angular/core";

@Directive({
    selector: '[markCloud]'
})
export class MarkCloudDirective {
    @Input('markCloud') mySize: number;
    private _defaultSize = 1;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let size = 10 + (this.mySize || this._defaultSize) * 4;
        renderer.setElementStyle(elementRef.nativeElement, 'font-size', size.toString());
        renderer.setElementStyle(elementRef.nativeElement, 'color', color);
    }

    @HostListener('mouseenter') onMouseEnter() {
        let size = 10 + (this.mySize || this._defaultSize) * 4 + 2;
        this.highlight(size);
    }

    @HostListener('mouseleave') onMouseLeave() {
        let size = 10 + this._defaultSize * 4;
        this.highlight(size);
    }

    private highlight(size: number) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-size', size.toString());
    }
}