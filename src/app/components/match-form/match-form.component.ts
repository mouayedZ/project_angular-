import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {
matchForm : FormGroup;
matchId:any;
match:any={};
obj:any={};
title:string="add match";
matches:any=allMatches;
findedMatch:any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService:MatchService,
    private router : Router) { }

  ngOnInit() {
    this.matchId=this.activatedRoute.snapshot.paramMap.get("id");
    // matchId existe =edit
    if (this.matchId) {
      this.title="edit match";
     this.matchService.getMatchById(this.match).subscribe((response)=>{
this.match = response.match ;
     });  
    }
  }
  addOrEditMatch(){
    console.log("here is aded match",this.obj );
    if (this.matchId){
      this.matchService.editMatch(this.match).subscribe((response)=>{
console.log("here response after edit",response.message)
      });
      
    } else{
      this.matchService.addMatch(this.match).subscribe((response)=>{
console.log("here response after add",response.msg)
      });
    }
   
  }
}
