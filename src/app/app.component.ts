import { Component, OnInit, Inject } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// @Inject(HomeComponent) home:HomeComponent;

constructor(public _home:HomeComponent){}

// onclick method to show and hide 
home(){
  this._home.all()
}

books(){
  this._home.book()
}

characs(){
  this._home.charac()
}

houses(){
  this._home.house()
}


}
