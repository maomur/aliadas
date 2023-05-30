import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadorPage } from './empleador.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadorPageRoutingModule {}
