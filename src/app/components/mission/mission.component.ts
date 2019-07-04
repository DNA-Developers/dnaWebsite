import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
  animations: [
    trigger('scrollAnimation',  [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('hide => show', animate('1.4s ease-in'))
    ])
  ]
})
export class MissionComponent implements OnInit {
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
    } 
  }
}
