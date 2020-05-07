import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantsAndPocketPage } from './pants-and-pocket.page';

const routes: Routes = [
  {
    path: '',
    component: PantsAndPocketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantsAndPocketPageRoutingModule {}
