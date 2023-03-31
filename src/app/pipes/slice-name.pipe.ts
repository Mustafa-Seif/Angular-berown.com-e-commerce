import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceName'
})
export class SliceNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split(" ")[0];
  }

}
