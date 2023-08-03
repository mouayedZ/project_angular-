import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';



@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches:any=[];
findedMatches:any;
path:string;
  constructor(
    private router: Router,
    private matchService: MatchService,
  ) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe((response)=>{
      console.log("here response from BE",response.matches);
      this.matches = response.matches;


    });
    
      
  }

}
