import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  { path: '', component: PresentationComponent},
  { path: 'presentation', component: PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}
