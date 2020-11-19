import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RequestsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule 
  ]
})
export class RequestsModule { }
