import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TShirtPageRoutingModule } from './t-shirt-routing.module';

import { TShirtPage } from './t-shirt.page';
import { ShareModuleModule } from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModuleModule,
    TShirtPageRoutingModule
  ],
  declarations: [TShirtPage]
})
export class TShirtPageModule {}
