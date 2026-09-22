import { AfterViewInit, Component, ElementRef, input, InputSignal, Signal, signal, viewChild } from '@angular/core';

@Component({
  selector: 'animated-arrow',
  imports: [],
  templateUrl: './arrow.html',
  styleUrl: './arrow.scss',
})
export class AnimatedArrow implements AfterViewInit {
  arrow: Signal<ElementRef<HTMLDivElement>> = viewChild.required<ElementRef<HTMLDivElement>>('arrow');

  arrowMirrored: InputSignal<boolean> = input(false);
  lastScrollY: number = window.scrollY;
  canAnimate: boolean = true;
  animate = signal(false);

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (this.shouldAnimate(entry)) {
          this.startAnimation();
        }

        if (this.shouldReset(entry)) {
          this.resetAnimation();
        }
      },
      { threshold: 1 },
    );

    observer.observe(this.arrow().nativeElement);
  }

  shouldAnimate(entry: IntersectionObserverEntry): boolean {
    const scrollingDown: boolean = window.scrollY > this.lastScrollY;
    this.lastScrollY = window.scrollY;

    return entry.isIntersecting && scrollingDown && this.canAnimate;
  }

  shouldReset(entry: IntersectionObserverEntry): boolean {
    return !entry.isIntersecting;
  }

  // arrowVisible(entry: IntersectionObserverEntry):boolean{
  //   return entry.isIntersecting;
  // }

  startAnimation() {
    this.animate.set(true);
    this.canAnimate = false;
  }

  resetAnimation() {
    this.animate.set(false);
    this.canAnimate = true;
  }
}
