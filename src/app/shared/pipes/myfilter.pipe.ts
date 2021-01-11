import { Input, Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../models/worker.model';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  @Input() workers: MyWorker[];
  
  transform(workers: any[], searchWorker:string): any[] {
    if (searchWorker === '') {
      return workers;
    } 
    else {
      let filteredItems = workers.filter(
        worker => (worker.name.toLowerCase().indexOf(searchWorker.toLowerCase()) !==-1 || 
              worker.surname.toLowerCase().indexOf(searchWorker.toLowerCase()) !==-1)
      );
      return filteredItems;
    }
  
  }

}
