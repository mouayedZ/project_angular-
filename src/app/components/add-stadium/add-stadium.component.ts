import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  addStadiumForm:FormGroup;
  title:string="add stadium";
  
  
  constructor(private X:FormBuilder) { }

  ngOnInit() {
    this.addStadiumForm=this.X.group({
      name:['', [Validators.required,]],
      Country:['',[Validators.required,]],
      capacity:['',[ Validators.required,  ]],
      
    })

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
  addstadium(){
    
   
    let stadiumTab = JSON.parse(localStorage.getItem('stadiums'));
   
 
    

        let stadium = {
            id: this.generateId(stadiumTab) + 1,
            stadiumName :this.addStadiumForm.value.name,
            stadiumCountry: this.addStadiumForm.value.Country,
            stadiumCapacity: this.addStadiumForm.value.capacity,
            

        }

        stadiumTab.push(stadium);
        localStorage.setItem('stadiums', JSON.stringify(stadiumTab));
       

     
   }

}
