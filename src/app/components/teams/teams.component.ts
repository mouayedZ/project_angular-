import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams:any=[];
// declaration des variables 
  constructor() { }

  ngOnInit() {
    this.teams=[
      {id:1,name:"RMD",owner:"florentino",foundation:1907,stadium:"santiego bernabeu"},
      {id:2,name:"FCB",owner:"Laporta",foundation:1928,stadium:"camp nou"},
      {id:3,name:"CA",owner:"almi",foundation:1920,stadium:"RADES"},
      
    ]
  }

}
