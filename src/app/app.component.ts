import { Component } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcourse';
  responses:any;

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    
    let obs = this.http.get('https://api.github.com/users');
    obs.subscribe(()=>console.log('Got the response'));// print this after successful GET request
    obs.subscribe((response)=>console.log(response)); // print the response in the console
    obs.subscribe((response)=>this.responses=response); // print the response in the console

  }
}
