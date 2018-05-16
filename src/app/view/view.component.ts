import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , Router } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { GotService } from '../got.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  public info;
  constructor(private location: Location, private _route:ActivatedRoute, private router:Router, public gotService: GotService) { }
  
  ngOnInit() {
    let Url = this._route.snapshot.paramMap.get('url')

    this.gotService.getInformation(Url).subscribe(
      data =>{
        this.info = data;
      },
      error =>{
        console.log(error.errorMessage);
      },
     )
  }
  goBackToPreviousPage(): any {

    this.location.back();

  }

}
