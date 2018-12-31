import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

declare var test: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  constructor(element: ElementRef) { 

  }

  ngOnInit() {      

    }
  
    f(){
      new test();
    }

    @HostListener("window:scroll", ['$event'])
    onWindowScroll() {
      
    }

}
