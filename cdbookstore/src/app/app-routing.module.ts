import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GeneratorComponent } from 'generator';
import { InventoryComponent } from 'inventory';
import { StoreComponent } from 'store';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'gen', component: GeneratorComponent},
  // {path: 'inv', component: InventoryComponent},
  // {path: 'str', component: StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
