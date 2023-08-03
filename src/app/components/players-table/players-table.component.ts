import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players:any=[];
  constructor(private router:Router,
    private playerService: PlayersService ) { }

  ngOnInit() {
this.playerService.getAllPlayers().subscribe;

  }
  goTodisplay(x:number){
    this.router.navigate([`playerInfo/${x}`]);
  }

}
