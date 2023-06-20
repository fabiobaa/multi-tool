import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CopyRoutingModule } from './copy-routing.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CopyRoutingModule,
    FormsModule,
    CarouselModule,
  ],

})
export class CopyModule {
}
