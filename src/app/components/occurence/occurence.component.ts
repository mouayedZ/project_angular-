import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {
  signupForm: FormGroup;
result:any=[];
  constructor(private X: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.X.group({
      firstName: ['', [Validators.required,]],
    })
  }
  display() {
    let userInput = this.cleanCh(this.signupForm.value.firstName);
    let result = [];
    for (let i = 0; i < userInput.length; i++) {
      let nb = this.occNbr(this.signupForm.value.firstName, userInput[i]);
      this.result.push(userInput[i] + ":" + nb);




    }
   
  }
  
  // occNumber(ch: string, x: string) {

  //   let nb = 0;
  //   for (let i = 0; i < ch.length; i++) {

  //     if (ch[i] == x) {
  //       nb = nb + 1;


  //     }


  //   }

  //   alert(nb);


  // }
  // nboccurence(ch: string) {
  //   let x = 0;
  //   let k = 0;
  //   let c: string;
  //   let tab = [];
  //   let y: string;
  //   do {
  //     x++;
  //     y = ch[0];
  //     for (let i = 1; i < ch.length; i++) {

  //       if (ch[i] == y) {
  //         x++;

  //       }

  //     }

  //     tab[k] = y + "  " + x;
  //     k++;

  //     ch = ch.slice(1, ch.length);
  //     ch = this.occurence(ch, y, x);
  //     x = 0;

  //   } while (ch.length != 0);
  //   for (let index = 0; index < tab.length; index++) {
  //     console.log(tab[index]);

  //   }
  // }
  // occurence(ch: string, y: string, x: number): string {
  //   for (let i = 0; i < x; i++) {


  //     for (let index = 0; index < ch.length; index++) {
  //       if (ch[index] == y)
  //         ch = ch.replace(y, "")


  //     }
  //   }
  //   return ch;
  // }
  // calculer le nombre d'occurence
  occNbr(chaine: string, c: string): number {
    let nb = 0;
    for (let i = 0; i < chaine.length; i++) {
      if (chaine[i] == c) {
        nb += 1;
      }

    }
    return nb;

  }
  cleanCh(chaine: string): string {
    let result: string = "";
    for (let i = 0; i < chaine.length; i++) {
      if (this.occNbr(result, chaine[i]) == 0) {
        result = result + chaine[i];

      }

    }
    return result;
    
  }


}
