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
    console.log("myBlogId = ", Url);

    this.gotService.getInformation(Url).subscribe(
      data =>{
        this.info = data;
        console.log(">>>",this.info)
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
