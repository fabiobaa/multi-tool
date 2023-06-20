import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from "./inicio-routing.module";
import { InicioComponent } from './inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { CopyComponent } from './pages/copy/copy.component';
import { SiglaComponent } from './pages/sigla/sigla.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms'; 
import { CopiesPipe } from "src/app/app/shared/pipes/copies.pipe";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InicioComponent, MenuComponent, CopyComponent, SiglaComponent,CopiesPipe],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CarouselModule,
    NgScrollbarModule,
    PerfectScrollbarModule,
    PopoverModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CopiesPipe],
})
export class InicioModule { }
