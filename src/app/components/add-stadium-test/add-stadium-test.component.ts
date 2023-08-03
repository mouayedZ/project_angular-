import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stadium-test',
  templateUrl: './add-stadium-test.component.html',
  styleUrls: ['./add-stadium-test.component.css']
})
export class AddStadiumTestComponent implements OnInit {
  addStadiumForm:FormGroup;

  constructor(private x :FormBuilder) { }

  ngOnInit() {
    this.addStadiumForm=this.x.group ({
      stadiumName:["",[Validators.required,]],
      stadiumCountry:["",[Validators.required]],
      stadiumCapacity:[" ",[Validators.required,]]

    })
  }
  addStadium(){
   
    let staduimsTabs=JSON.parse(localStorage.getItem('staduimsTest' ||'[]'));

    staduimsTabs.push(this.addStadiumForm.value);
    localStorage.setItem('staduimsTest',JSON.stringify(staduimsTabs));
  }

}
