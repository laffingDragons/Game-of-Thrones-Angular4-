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


  // value for loop:
  public m: number = 20;
  public n: number = 12;
  public o: number =20;
  p: number = 1;


  // for sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  

  constructor(public gotService: GotService, private _route:ActivatedRoute, private router:Router) { }
  
  ngOnInit() {
    this.allData = [];
    // fetch all characters from api
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

  
} //end on init


refresh(){
  this.ngOnInit()
}

}
