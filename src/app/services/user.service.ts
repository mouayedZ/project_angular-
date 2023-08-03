import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // destination adress
usersUrl:string="http://localhost:3000/users"
// httpClient : livreur

 

  constructor(private httpClient: HttpClient) { }

  
  // response : one object
 
  // response : bolean/string
 
  // response :boolean /string
  signup(userObj,img:File){
    let fData = new FormData();
    fData.append("img",img);
    fData.append("firstName",userObj.firstName);
    fData.append("lastName",userObj.lastName);
    fData.append("email",userObj.email);
    fData.append("pwd",userObj.pwd);
    fData.append("role",userObj.role);
    if (userObj.tel) {
      fData.append("tel",userObj.tel);
      
    }
    
    console.log("service", userObj);
    
    return this.httpClient.post<{msg:boolean}>(this.usersUrl + "/signup",fData);
  }
  login(obj) {
    return this.httpClient.post<{msg:string,connectedUser:any}>(this.usersUrl + "/login",obj);
  }
 
 
}
