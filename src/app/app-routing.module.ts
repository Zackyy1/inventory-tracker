import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './layout/item-list/item-list.component';


const routes: Routes = [
  { path: 'list', component: ItemListComponent },
  {path: '',   redirectTo: 'list', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
