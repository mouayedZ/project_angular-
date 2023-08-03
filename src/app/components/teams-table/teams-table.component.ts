import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teams:any=[];
path:string;
isDisplayed:boolean=false;
  constructor(private router:Router,
    private teamsService:TeamService) { }

  ngOnInit() {
   this.teamsService.getAllTeams().subscribe;
    this.path = this.router.url;
    if (this.path=="/admin") {

      this.isDisplayed=true;
      
      
    }
    
  }

}
