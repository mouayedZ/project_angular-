import { NgForOf } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
stadiumsTab:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
  this.stadiumsTab = JSON.parse(localStorage.getItem('stadiums') || "[]");
  }
  delete(id){


    for (let i = 0;i < this.stadiumsTab.length; i++) {
     if (this.stadiumsTab[i].id== id) {
      this.stadiumsTab.splice(i,1);
      break;
      
     }
      
    }

localStorage.setItem("stadiums",JSON.stringify(this.stadiumsTab));
    location.reload;
  }
  goTodisplay(id){
    this.router.navigate([`stadiumInfo/${id}`]);
  }

}
