import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll(e){
    let offSetY = window.scrollY
    console.log(offSetY)
    if (offSetY >= 565) {

    } else if (offSetY >= 800) {

    }
  }

}