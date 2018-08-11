import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneratorComponent} from "./generator.component";
import {BookNumberComponent} from "./book-number/book-number.component";
import {CdNumberComponent} from "./cd-number/cd-number.component";
import {DvdNumberComponent} from "./dvd-number/dvd-number.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'gen', component: GeneratorComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'book-number', component: BookNumberComponent},
      {path: 'cd-number', component: CdNumberComponent},
      {path: 'dvd-number', component: DvdNumberComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule {
}
