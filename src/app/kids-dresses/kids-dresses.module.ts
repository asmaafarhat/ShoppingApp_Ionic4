import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsDressesPageRoutingModule } from './kids-dresses-routing.module';

import { KidsDressesPage } from './kids-dresses.page';
import {ShareModuleModule} from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsDressesPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [KidsDressesPage]
})
export class KidsDressesPageModule {}
