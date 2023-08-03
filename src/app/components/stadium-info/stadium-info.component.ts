import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
  stadiumsTab:any=[];
  matches:any;
  
  stadiumId:any;
findedMatch:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.stadiumId=this.activatedRoute.snapshot.paramMap.get('id');
    this.findedMatch= this.matches.find(
      (obj:any)=>{return obj.id ==this.stadiumId}
    )
    this.stadiumsTab = JSON.parse(localStorage.getItem('stadiums') || "[]");
  }

}
