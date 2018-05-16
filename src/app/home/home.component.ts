import { Component, OnInit } from "@angular/core";
import { ActivatedRoute , Router } from "@angular/router";
import { GotService } from "../got.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  allCharacs = [];
  allBooks = [];
  allHouses = [];
  allData = [];
  nextComponent = [];
  p: number = 1;

  // value for loop:
  public m: number = 50;
  public n: number = 12;
  public o: number =20;
  // for sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  // variables for show and hide
   homeButton : boolean = true;
   bookButton : boolean = true;
   characButton : boolean = true;
   houseButton : boolean = true;
   view : boolean = false;
  
  // method to show and data
hide() {
  this.view = true;
  this.homeButton = false;
  this.bookButton = false;
  this.characButton = false;
  this.houseButton = false;

}
all() {
  console.log("all was called");
  
  this.homeButton = true;
  this.bookButton = true;
  this.characButton = true;
  this.houseButton = true;
  this.view = false;
}
book() {
  this.homeButton = false;
  this.bookButton = true;
  this.characButton = false;
  this.houseButton = false;
  this.view = false;
}
charac() {
  console.log("characx was called");
  this.homeButton = false;
  this.bookButton = false;
  this.characButton = true;
  this.houseButton = false;
  this.view = false;
  console.log("charac was called", this.characButton);
  
}
house() {
  console.log("house was called");
  this.homeButton = false;
  this.bookButton = false;
  this.characButton = false;
  this.houseButton = true;
  this.view = false;
  console.log("house was called", this.characButton, this.houseButton);

} //end of nav buttons

  constructor(public gotService: GotService, private _route:ActivatedRoute, private router:Router) { }
  
  ngOnInit() {
    this.allData = [];
    // fetch all characters from api
    console.log("value of m", this.m);
    
    for(var x = 1; x <= this.m; x++){
    this.allCharacs = this.gotService.getAllCharacs(x).subscribe(
      data => {
        this.allCharacs = data;
        this.allData.push(this.allCharacs);
      },
      error => {
        console.log("Some error occured", error.errorMessage);
      }
    );
  }
  
     // fetch all books from api
    for(var y = 1; y <= this.n; y++){
     this.allBooks = this.gotService.getAllBooks(y).subscribe(
      data => {
        this.allBooks = data;
        this.allData.push(this.allBooks);
      },
      error => {
        console.log("Some error occured", error.errorMessage);
      }
    );
  }

     // fetch all houses from api
    for(var z = 1; z <= this.o; z++){
     this.allHouses = this.gotService.getAllHouses(z).subscribe(
      data => {
        this.allHouses = data;
        this.allData.push(this.allHouses);
      },
      error => {
        console.log("Some error occured", error.errorMessage);
      }
    );
  }

}


refresh(){
  this.ngOnInit()
}


}
