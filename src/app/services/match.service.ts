import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
// destination adress
matchUrl:string="http://localhost:3000/matches"
// httpClient : livreur

  constructor(private httpClient: HttpClient) { }
  // response : array of objects

  getAllMatches(){
    return this.httpClient.get<{matches : any}>(this.matchUrl);
  }
  // response : one object
  getMatchById(id){
    return this.httpClient.get<{match : any}>(this.matchUrl +  "/" + id);
  }
  // response : bolean/string
  deletMatchById(id){
    return this.httpClient.delete(this.matchUrl +  "/" + id);

  }
  // response :boolean /string
  addMatch(matchObj){
    return this.httpClient.post<{msg : String}>(this.matchUrl,matchObj);
  }
  // response : object/boolean/string
  editMatch(matchObj){
    return this.httpClient.put<{message : String}>(this.matchUrl,matchObj);
    
  }






}
