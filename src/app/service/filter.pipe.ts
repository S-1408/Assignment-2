import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): any {

    if(users === null){
      return users;
    }
    return users.filter(function(search:any){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
    });
  }

}
