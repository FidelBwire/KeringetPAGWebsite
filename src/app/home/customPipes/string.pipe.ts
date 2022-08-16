import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  slicedString: string = "";

  transform(originalString: string, length: number): string {
    this.slicedString = originalString.substring(0, length).trim() + "...";
    return this.slicedString;
  }

}
