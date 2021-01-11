import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWorkerComponent } from './table-worker.component';

describe('TableWorkerComponent', () => {
  let component: TableWorkerComponent;
  let fixture: ComponentFixture<TableWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
