import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



const exampleRoutes: Route[] = [
  {
      path: '',
      component: ListComponent,
  },
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ListModule { }
