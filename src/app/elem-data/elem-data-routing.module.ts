import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElemDataPage } from './elem-data.page';

const routes: Routes = [
  {
    path: '',
    component: ElemDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElemDataPageRoutingModule {}
