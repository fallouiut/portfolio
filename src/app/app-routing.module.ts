import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersoComponent } from './components/perso/perso.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProComponent } from './components/pro/pro.component';
import { SchoolComponent } from './components/school/school.component';
import { StackComponent } from './components/stack/stack.component';

const routes: Routes = [
  { path: '', component: PresentationComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'school'      , component: SchoolComponent},
  { path: 'professional', component: ProComponent},
  { path: 'personal'    , component: PersoComponent},
  { path: 'tech-stack'  , component: StackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}
