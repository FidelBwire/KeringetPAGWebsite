import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(stringValue: string, desiredStringSize: number): string {
    return "";
  }

}
