import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Anuj';
  
  test = window.location.href
  myid = 'testid';
  isdisabled = false;
  myFunction() {
  
    
    return "Welcom " + this.name;
  }
}
