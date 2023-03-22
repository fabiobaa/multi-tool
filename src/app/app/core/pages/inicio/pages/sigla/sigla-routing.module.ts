import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiglaComponent } from './sigla.component';

const routes: Routes = [
  { path: '', component: SiglaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiglaRoutingModule { }
