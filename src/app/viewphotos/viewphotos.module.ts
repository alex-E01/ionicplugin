import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewphotosPageRoutingModule } from './viewphotos-routing.module';

import { ViewphotosPage } from './viewphotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewphotosPageRoutingModule
  ],
  declarations: [ViewphotosPage]
})
export class ViewphotosPageModule {}
