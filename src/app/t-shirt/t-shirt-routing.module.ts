import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TShirtPage } from './t-shirt.page';

const routes: Routes = [
  {
    path: '',
    component: TShirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TShirtPageRoutingModule {}
