import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceName'
})
export class SliceNamePipe implements PipeTransform {

  transform(value: string, arg1:string): unknown {
    if (value) {
      return value.split(" ")[0];
    }else{
      return arg1
    }
    
  }

}
