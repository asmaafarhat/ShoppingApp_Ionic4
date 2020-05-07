import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElemDataPageRoutingModule } from './elem-data-routing.module';

import { ElemDataPage } from './elem-data.page';
import {ShareModuleModule} from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElemDataPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [ElemDataPage]
})
export class ElemDataPageModule {}
