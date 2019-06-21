import { Component, OnInit, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  photo = '../../../assets/cropped-MasterLogo.png';
  menu = '../../../assets/menu_enhanced.svg'
  close = '../../../assets/closeButton.svg'
  screenHeight= window.innerHeight;
  screenWidth = window.innerWidth;
  show = true;
  hidden = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  constructor() {
  }

  ngOnInit() {

  }
  ngOnChanges() {
    this.onResize()
  }

  hide(){
    if(this.screenWidth >= 880){
      return true
    }
    else{
      return false
    }
  }

  toggle(){
    this.show = !this.show;
    this.hidden = !this.hidden;
  }

  disappear(){
    if(this.hidden === true){
      return 'none'
    }
    else{
      return 'block'
    }
  }


}
