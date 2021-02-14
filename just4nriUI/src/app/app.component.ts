import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'just4nriUI';
  
  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.router.navigateByUrl('usermodel');
  }
}
