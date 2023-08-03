import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  searchForm: FormGroup;
  obj:any={};
  constructor(private router:Router) { }

  ngOnInit() {
  }
  search(){
    //  console.log('here is team',this.obj);
    // localStorage.setItem('teamToFind', JSON.stringify( this.obj));
    this.router.navigate(['allMatches/search'])
  }

}
