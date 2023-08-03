import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
playersUrl:string="http://localhost:3000/players"
  constructor(private httpClient: HttpClient) { }
  getAllPlayers(){
    return this.httpClient.get(this.playersUrl);
  }
  // response : one object
  getPlayersById(id){
    return this.httpClient.get(this.playersUrl +  "/" + id);
  }
  // response : bolean/string
  deletPlayerById(id){
    return this.httpClient.delete(this.playersUrl +  "/" + id);

  }
  // response :boolean /string
  addPlayer(playerObj){
    return this.httpClient.post(this.playersUrl,playerObj);
  }
  // response : object/boolean/string
  editPlayer(playerObj){
    return this.httpClient.put(this.playersUrl,playerObj);
    
  }

}
