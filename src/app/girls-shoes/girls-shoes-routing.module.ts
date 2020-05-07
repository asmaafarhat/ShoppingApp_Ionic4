import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirlsShoesPage } from './girls-shoes.page';

const routes: Routes = [
  {
    path: '',
    component: GirlsShoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirlsShoesPageRoutingModule {}
