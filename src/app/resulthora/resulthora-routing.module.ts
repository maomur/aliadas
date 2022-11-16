import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResulthoraPage } from './resulthora.page';

const routes: Routes = [
  {
    path: '',
    component: ResulthoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResulthoraPageRoutingModule {}
