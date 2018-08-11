import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {CdListComponent} from './cd-list/cd-list.component';
import {CdDetailComponent} from './cd-detail/cd-detail.component';
import {DvdListComponent} from './dvd-list/dvd-list.component';
import {DvdDetailComponent} from './dvd-detail/dvd-detail.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'str', component: StoreComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'book-list', component: BookListComponent},
      {path: 'book-detail', component: BookDetailComponent},
      {path: 'cd-list', component: CdListComponent},
      {path: 'cd-detail', component: CdDetailComponent},
      {path: 'dvd-list', component: DvdListComponent},
      {path: 'dvd-detail', component: DvdDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}
