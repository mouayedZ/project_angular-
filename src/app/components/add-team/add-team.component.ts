import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm: FormGroup;
  obj:any={};
  stadiums:any=[];
  
  constructor() { }

  ngOnInit() {
    this.stadiums=JSON.parse(localStorage.getItem('stadiums')||'[]');
  }
  addTeam(){
    console.log('this is ', this.obj);
    let teamsTab= JSON.parse(localStorage.getItem('teams')||'[]');
    this.obj.id=this.generateId(teamsTab)+1;
    teamsTab.push(this.obj);
    localStorage.setItem('teams',JSON.stringify(teamsTab));
    

  }
  generateId(t) {
    let max;
    if (t.length == 0) {
        max = 0
    } else {
        max = t[0].id;
        for (let i = 0; i < t.length; i++) {
            if (t[i].id > max) {
                max = t[i].id;
            }



        }
    }
    return max;
}

}
