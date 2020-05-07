import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantsAndPocketPageRoutingModule } from './pants-and-pocket-routing.module';

import { PantsAndPocketPage } from './pants-and-pocket.page';
import { ShareModuleModule } from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModuleModule,
    PantsAndPocketPageRoutingModule
  ],
  declarations: [PantsAndPocketPage]
})
export class PantsAndPocketPageModule {}
