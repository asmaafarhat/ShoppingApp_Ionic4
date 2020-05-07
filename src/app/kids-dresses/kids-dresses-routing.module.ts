import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsDressesPage } from './kids-dresses.page';

const routes: Routes = [
  {
    path: '',
    component: KidsDressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsDressesPageRoutingModule {}
