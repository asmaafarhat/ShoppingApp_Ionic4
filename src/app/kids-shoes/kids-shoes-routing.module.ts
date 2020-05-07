import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsShoesPage } from './kids-shoes.page';

const routes: Routes = [
  {
    path: '',
    component: KidsShoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsShoesPageRoutingModule {}
