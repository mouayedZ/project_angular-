import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
// destination adress
teamsUrl:string="http://localhost:3000/teams"
// httpClient : livreur

  constructor(private httpClient: HttpClient) { }
  // response : array of objects

  getAllTeams(){
    return this.httpClient.get(this.teamsUrl);
  }
  // response : one object
  getTeamById(id){
    return this.httpClient.get(this.teamsUrl +  "/" + id);
  }
  // response : bolean/string
  deletTeamById(id){
    return this.httpClient.delete(this.teamsUrl +  "/" + id);

  }
  // response :boolean /string
  addTeam(teamsObj){
    return this.httpClient.post(this.teamsUrl,teamsObj);
  }
  // response : object/boolean/string
  editTeam(teamsObj){
    return this.httpClient.put(this.teamsUrl,teamsObj);
    
  }

 
}
