import { Injectable } from '@angular/core';
// importing http and client to make request
import{ HttpClient, HttpErrorResponse } from '@angular/common/http'
// import observeable related code
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class GotService {

  public baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor( private _http:HttpClient) { }


  // exception error handler
  private handleError(err: HttpErrorResponse){
    console.log("Handle error Http Calls");
    console.log(err.message);
    return Observable.throw(err.message);   
  }

  // fetch Character data
  public getAllCharacs(x):any{
    let myResponse =  this._http.get(`${this.baseUrl}/characters/${x}`);
    // console.log(">>>",x)
    return myResponse;
  }

  // fetch Books data
  public getAllBooks(y):any{
    let myResponse =  this._http.get(`${this.baseUrl}/books/${y}`);
    // console.log(myResponse)
    return myResponse;
  }

  // fetch Character data
  public getAllHouses(z):any{
    let myResponse =  this._http.get(`${this.baseUrl}/houses/${z}`);
    // console.log(myResponse)
    return myResponse;
  }

  // fetch information of particular data
  public getInformation(url):any {
    // for of loop
    let myResponse = this._http.get(`${url}`)
    console.log("to be set",myResponse)
    return myResponse;
  }//end of get blog
}