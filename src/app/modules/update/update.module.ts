import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UpdateComponent } from './update.component';

const exampleRoutes: Route[] = [
  {
      path: '',
      component: UpdateComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule
  ]
})
export class UpdateModule { }
