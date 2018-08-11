import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InventoryRoutingModule} from "./inventory-routing.module";
import { InventoryComponent } from './inventory.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    InventoryComponent,
    HomeComponent,
    ItemListComponent
  ],
  imports: [
    InventoryRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [InventoryComponent]
})
export class InventoryModule { }
