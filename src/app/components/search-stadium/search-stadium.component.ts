import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-stadium',
  templateUrl: './search-stadium.component.html',
  styleUrls: ['./search-stadium.component.css']
})
export class SearchStadiumComponent implements OnInit {
  searchForm: FormGroup;
  obj:any={};
  title:string="search";
   searchStadium:any=[];

  constructor() { }

  ngOnInit() {
  }
  search(){
    console.log("here is user obj",this.obj ) ;
     this.searchStadium=[];
    let stadiumTab = JSON.parse(localStorage.getItem('stadiums') || '[]');
    for (let i = 0; i < stadiumTab.length; i++) {
     if (stadiumTab[i].stadiumName==this.obj.nameStadium) {
      this.searchStadium.push(stadiumTab[i]);
     }
     
     
       
    }


  }

}
