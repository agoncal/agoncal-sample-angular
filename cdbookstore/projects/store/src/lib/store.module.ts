import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { CdDetailComponent } from './cd-detail/cd-detail.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    StoreComponent, 
    BookListComponent, 
    BookDetailComponent, 
    CdListComponent, 
    CdDetailComponent, 
    DvdListComponent, 
    DvdDetailComponent, HomeComponent
  ],
  imports: [
    StoreRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
