import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
matches:any=[]
  constructor(private router:Router,
    private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe((response)=> {
      this.matches = response.matches;
    });
  }
  goTodisplay(x:number){
    this.router.navigate([`matchInfo/${x}`]);
    


  }
  goToEdit(y:number){
    this.router.navigate([`editMatch/${y}`]);


  }

}
