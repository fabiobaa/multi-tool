import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: any) {
  const x = event.clientX;
  const y = event.clientY;
  const size = Math.min(event.currentTarget.offsetWidth, event.currentTarget.offsetHeight);
  const ripple = document.createElement('span');
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x - event.currentTarget.offsetLeft - size / 2}px`;
  ripple.style.top = `${y - event.currentTarget.offsetTop - size / 2}px`;
  ripple.classList.add('ripple-effect');
  event.currentTarget.appendChild(ripple);

  }

}
