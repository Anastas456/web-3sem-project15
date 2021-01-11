import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { TableWorkerComponent } from './ui/table-worker/table-worker.component';
import { AddWorkerComponent } from './ui/add-worker/add-worker.component';
import { EditWorkerComponent } from './ui/edit-worker/edit-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfilterPipe,
    TableWorkerComponent,
    AddWorkerComponent,
    EditWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
