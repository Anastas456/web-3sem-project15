import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker } from 'src/app/shared/models/worker.model';

@Component({
  selector: 'app-table-worker',
  templateUrl: './table-worker.component.html',
  styleUrls: ['./table-worker.component.css']
})
export class TableWorkerComponent implements OnInit {
  @Input() title:string;
  @Input() workers: MyWorker[]=[];
  @Input() searchWorker:string;

  @Output() deleteWorker = 
  new EventEmitter<number>();

  @Output() editWorker = 
  new EventEmitter<number>();

  

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id:number){
    this.deleteWorker.emit(id);
  }

  toEditWorker(id:number){
    this.editWorker.emit(id);
  }

}
