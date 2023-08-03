import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(ch: string) {
    let result = "";
    let t = ["a", "e", "i", "u", "o", "y", "A", "O", "E", "U", "I", "Y"];

    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
      for (let j = 0; j < t.length; j++) {
        if (ch[i].toLowerCase() == t[j]) {
          x = '*';
          break;

        }


      }
      result = result + x;
    }

    return result



  }

}
