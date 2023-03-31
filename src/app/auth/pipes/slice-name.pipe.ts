import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceName'
})
export class SliceNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
