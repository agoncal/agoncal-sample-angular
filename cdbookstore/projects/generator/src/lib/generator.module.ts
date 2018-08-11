import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponent } from './generator.component';
import { BookNumberComponent } from './book-number/book-number.component';
import { CdNumberComponent } from './cd-number/cd-number.component';
import { DvdNumberComponent } from './dvd-number/dvd-number.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    GeneratorComponent,
    BookNumberComponent,
    CdNumberComponent,
    DvdNumberComponent,
    HomeComponent
  ],
  imports: [
    GeneratorRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [GeneratorComponent]
})
export class GeneratorModule { }
