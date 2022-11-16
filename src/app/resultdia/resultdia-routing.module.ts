import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultdiaPage } from './resultdia.page';

const routes: Routes = [
  {
    path: '',
    component: ResultdiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultdiaPageRoutingModule {}
