import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibertadsindicalPage } from './libertadsindical.page';

const routes: Routes = [
  {
    path: '',
    component: LibertadsindicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibertadsindicalPageRoutingModule {}
