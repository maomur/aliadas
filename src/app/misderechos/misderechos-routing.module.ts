import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosPage } from './misderechos.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosPageRoutingModule {}
