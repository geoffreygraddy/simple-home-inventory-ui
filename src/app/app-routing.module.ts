import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeInventoryListComponent} from "./home-inventory-list/home-inventory-list.component";

const routes: Routes = [
  { path: '', component: HomeInventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
