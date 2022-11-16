import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultdia'
})
export class ResultdiaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
