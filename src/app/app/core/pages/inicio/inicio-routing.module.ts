import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { CopyComponent } from './pages/copy/copy.component';


const routes: Routes = [
  { path: '', component: InicioComponent,
  children: [
    {
      path: '',
      children: [
        {
          path: 'copy',
          loadChildren: ()=> import('./pages/copy/copy.module').then(m => m.CopyModule)
        },
        {
          path: 'sigla',
          loadChildren: ()=> import('./pages/sigla/sigla.module').then(m => m.SiglaModule)
        },
        { path: '', component: CopyComponent }
      ],      
    }
  ]
},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
