import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirlsDressesPage } from './girls-dresses.page';

const routes: Routes = [
  {
    path: '',
    component: GirlsDressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirlsDressesPageRoutingModule {}
