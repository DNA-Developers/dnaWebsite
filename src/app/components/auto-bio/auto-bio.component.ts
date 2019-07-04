import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-auto-bio',
  templateUrl: './auto-bio.component.html',
  styleUrls: ['./auto-bio.component.css'],
  animations: [
    trigger('scrollAnimation',  [
      state('show', style({
        opacity: 1,
      })),
      state('hide',   style({
        opacity: 0,
      })),
      transition('show => hide', animate('2s ease-in')),
      transition('hide => show', animate('4.7s ease-in'))
    ])
  ]
})
export class AutoBioComponent implements OnInit {
  state = 'hide'
  constructor(public el: ElementRef) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition <= componentPosition) {
      this.state = 'show'
     } // else {
    //   this.state = 'hide'
    // }
  }

}
