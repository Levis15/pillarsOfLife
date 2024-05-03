import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hideContent: boolean = false;
  cUrl = "";

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // When navigation starts, hide the content
        this.hideContent = true;
      }
    });
  }
  ngOnInit() {
    // Accessing the current URL path
    const currentUrl = this.router.url;
    this.cUrl = currentUrl;
    console.log(currentUrl); // Output: "/your/current/path"
  }
  
}
