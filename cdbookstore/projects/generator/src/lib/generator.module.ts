import { NgModule } from '@angular/core';
import { GeneratorComponent } from './generator.component';

import { GeneratorRoutingModule } from './generator-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [GeneratorComponent],
  imports: [
    GeneratorRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [GeneratorComponent]
})
export class GeneratorModule { }
