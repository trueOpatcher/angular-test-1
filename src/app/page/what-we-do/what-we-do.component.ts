import { animate, style, } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})

export class WhatWeDoComponent {

  animateTop = [
    style({opacity: 0, transform: 'translateY(200px)'}),
    animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'translateY(0)'}))
  ];

  punchingBag = [
    style({opacity: 0, transform: 'translateY(-200px)'}),
    animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'translateY(0)'}))
  ];

  phone = [
    style({opacity: 0, transform: 'translateY(200px)'}),
    animate('700ms cubic-bezier(0.35, 0, 0.25, 1)', 
    style({opacity: 1, transform: 'translateY(0)'})),
  ];

  message1 = [
    style({opacity: 0, transform: 'scale(0.5)'}),
    animate('400ms 0.7s cubic-bezier(0.35, 0, 0.25, 1)', 
    style({opacity: 1, transform: 'scale(1)'})),
  ];

  message2 = [
    style({opacity: 0, transform: 'scale(0.5)'}),
    animate('400ms 1.1s cubic-bezier(0.35, 0, 0.25, 1)', 
    style({opacity: 1, transform: 'scale(1)'})),
  ];

}
