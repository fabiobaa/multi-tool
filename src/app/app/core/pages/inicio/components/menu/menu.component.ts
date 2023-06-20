import { AfterViewInit, Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit  {


  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  
  // ngOnInit(): void {
  //   // const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  //   // const tooltips = tooltipTriggerList.map((tooltipTriggerEl) => {
  //   //   return new Tooltip(tooltipTriggerEl);
  //   // });

  //   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  //   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     return new bootstrap.Tooltip(tooltipTriggerEl)
  //   })
   
    
  // }
}
