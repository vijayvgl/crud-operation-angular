import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => 
      import("./modules/list/list.module").then ((m) => m.ListModule),
      pathMatch: 'full'
  },
  {
    path: "create",
    loadChildren: () => 
    import("./modules/create/create.module").then ((m) => m.CreateModule)
  },
  {
    path: "update",
    loadChildren: () => 
    import("./modules/update/update.module").then ((m) => m.UpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
