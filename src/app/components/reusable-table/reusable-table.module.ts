import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatIconModule} from '@angular/material/icon';
import {CdkTableModule} from '@angular/cdk/table'; 
import { MatButtonModule } from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [ReusableTableComponent],
  exports: [ReusableTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    CdkTableModule,
    MatButtonModule,
    MatSortModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTooltipModule
  ]
})
export class ReusableTableModule { }
