import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirlsShoesPageRoutingModule } from './girls-shoes-routing.module';

import { GirlsShoesPage } from './girls-shoes.page';
import {ShareModuleModule} from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModuleModule,
    GirlsShoesPageRoutingModule
  ],
  declarations: [GirlsShoesPage]
})
export class GirlsShoesPageModule {}
