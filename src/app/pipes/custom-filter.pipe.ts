import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(objs:any, x:string){
    if (x===undefined) {
      return (objs);

      
    }
    return (objs.filter(
      (obj)=> {return obj.teamOne == x || obj.teamtwo == x}
    ))
   
  }

}
