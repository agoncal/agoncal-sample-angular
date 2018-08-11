import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InventoryComponent} from "./inventory.component";
import {ItemListComponent} from "./item-list/item-list.component";

const routes: Routes = [
  {
    path: 'inv', component: InventoryComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'item-list', component: ItemListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {
}
