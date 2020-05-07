import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirlsDressesPageRoutingModule } from './girls-dresses-routing.module';

import { GirlsDressesPage } from './girls-dresses.page';
import {ShareModuleModule} from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GirlsDressesPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [GirlsDressesPage]
})
export class GirlsDressesPageModule { }
