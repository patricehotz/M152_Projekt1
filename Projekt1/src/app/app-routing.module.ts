import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UhrheberrechtComponent } from './uhrheberrecht/uhrheberrecht.component';
import { KonzeptComponent } from './konzept/konzept.component';
import { DateiformateComponent } from './dateiformate/dateiformate.component';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'copyright', component: UhrheberrechtComponent},
  {path: 'concept', component: KonzeptComponent},
  {path: 'datatypes', component: DateiformateComponent},
  {path: 'animations', component: AnimationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
