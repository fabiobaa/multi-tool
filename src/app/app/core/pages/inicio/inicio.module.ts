import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from "./inicio-routing.module";
import { InicioComponent } from './inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { CopyComponent } from './pages/copy/copy.component';
import { SiglaComponent } from './pages/sigla/sigla.component';


@NgModule({
  declarations: [InicioComponent, MenuComponent, CopyComponent, SiglaComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
