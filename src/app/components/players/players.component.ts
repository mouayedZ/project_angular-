import { Component, OnInit } from '@angular/core';
import { allPlayers } from 'src/app/data/playersData';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any=[];
  constructor() { }

  ngOnInit() {
    this.players=allPlayers;
    
  }

}
