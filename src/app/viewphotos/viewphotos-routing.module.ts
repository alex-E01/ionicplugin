import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewphotosPage } from './viewphotos.page';

const routes: Routes = [
  {
    path: '',
    component: ViewphotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewphotosPageRoutingModule {}
