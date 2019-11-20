import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-click',
  templateUrl: './on-click.component.html',
  styleUrls: ['./on-click.component.css']
})
export class OnClickComponent implements OnInit {

  //toggle
  user:any;
  constructor() {  
    this.user = {
      name: "siddhant",
      address:"Ganja",
      phno:"9823180344"
    }
  }
  isCollapsed:boolean=true;
  toggle(){
    this.isCollapsed=!this.isCollapsed;
  }
  
  //two way binding, requires ngModule and FormsModule in app.module.ts
  inputText:string="initial value";

  ngOnInit() {
  }

}
