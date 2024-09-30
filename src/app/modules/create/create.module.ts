import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';

const exampleRoutes: Route[] = [
  {
      path: '',
      component: CreateComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule
  ]
})
export class CreateModule { }
