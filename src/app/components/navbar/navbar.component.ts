import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NavbarComponent implements OnInit {
  menuOpen: boolean

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) this.menuOpen = false
  }
}
