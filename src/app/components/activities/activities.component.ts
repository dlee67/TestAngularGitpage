import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms 150ms ease-out', style({opacity: 1}))
      ])
    ])
  ]
})
export class ActivitiesComponent implements OnInit {

  showIntel: boolean
  showETH: boolean
  showHPC: boolean

  constructor() { }

  ngOnInit(): void {
    this.showIntel = true
  }

  @HostListener('window:scroll')
  onWindowScroll(e){
    
    console.log(window.scrollY)

    if (830 > window.scrollY && window.scrollY >= 565) {
      this.showIntel = false
      this.showETH = true
      this.showHPC = false
    } else if (window.scrollY >= 830) {
      this.showIntel = false
      this.showETH = false
      this.showHPC = true
    } else {
      this.showIntel = true
      this.showETH = false
      this.showHPC = false
    }
  }

}