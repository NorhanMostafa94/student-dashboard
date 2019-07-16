import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './_model/student'
import { from } from 'rxjs';
@Pipe({
  name: 'searchData'
})
export class SearchPipe implements PipeTransform {

  transform(value: Student[], args: string): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item.name).toLowerCase().includes(args);
    });
  }

}
