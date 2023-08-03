import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {
  player:any=allPlayers;
playerId:any;
findedPlayer:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.playerId=this.activatedRoute.snapshot.paramMap.get('id');
    this.findedPlayer= this.player.find(
      (obj:any)=>{return obj.id ==this.playerId}
    )

  }

}
