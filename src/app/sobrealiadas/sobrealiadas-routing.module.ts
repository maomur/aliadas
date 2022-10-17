import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrealiadasPage } from './sobrealiadas.page';

const routes: Routes = [
  {
    path: '',
    component: SobrealiadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrealiadasPageRoutingModule {}
