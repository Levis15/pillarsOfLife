import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  hideContent: boolean = false;
  cUrl = "";

  constructor(private router: Router) {
    // Subscribe to router events
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     // When navigation starts, hide the content
    //     this.hideContent = true;
    //   }
    // });
  }

  ngOnInit() {
    debugger;
    // Accessing the current URL path
    const currentUrl = this.router.url;
    this.cUrl = currentUrl;
    console.log(currentUrl); // Output: "/your/current/path"
  }
}
