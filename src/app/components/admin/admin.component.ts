import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
actualDate:any;
title:string="dashboard admin";

  constructor() { }

  ngOnInit() {
    this.actualDate =new Date ();
  }
 
  

}
