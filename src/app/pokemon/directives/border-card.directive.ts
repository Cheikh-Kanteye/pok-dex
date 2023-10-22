import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  initialColor: string = "#f5f5f5";
  defaultColor: string = "#009688";
  defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor, "solid");
    this.setHeight(this.defaultHeight);
    this.setTransformation(1, 0);
    this.el.nativeElement.style.transition = `all 500ms ease-in-out`;
  }

  @Input("pkmnBorderCard") borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor, "groove");
    this.setTransformation(1.05, -2);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor, "solid");
    this.setTransformation(1, 0);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setTransformation(scale: number, angle: number) {
    this.el.nativeElement.style.transform = `scale(${scale}) rotate(${angle}deg)`;
  }

  setBorder(color: string, style: string) {
    this.el.nativeElement.style.border = `4px ${style} ${color}`;
  }
}
