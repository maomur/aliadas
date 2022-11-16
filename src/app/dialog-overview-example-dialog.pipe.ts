import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dialogOverviewExampleDialog'
})
export class DialogOverviewExampleDialogPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
