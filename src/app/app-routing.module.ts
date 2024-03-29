import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {
    path: 'inicio',
    loadChildren: ()=> import('./app/core/pages/inicio/inicio.module').then(m => m.InicioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
