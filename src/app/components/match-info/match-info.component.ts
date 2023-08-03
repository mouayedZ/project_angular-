import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

matches:any=allMatches;
matchId:any;
findedMatch:any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService:MatchService) { }

  ngOnInit() {
    this.matchId=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.matchId).subscribe((response)=>{
      this.findedMatch = response.match;
    });
    // this.findedMatch= this.matches.find(
    //   (obj:any)=>{return obj.id ==this.matchId}
    // )

    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id ==this.matchId) {
    //     this.findedMatch=this.matches[i]
    //     break;    
    //   } 
    // }
  }

}
