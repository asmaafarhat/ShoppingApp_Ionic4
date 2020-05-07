import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartPageRoutingModule } from './view-cart-routing.module';

import { ViewCartPage } from './view-cart.page';
import { ShareModuleModule } from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [ViewCartPage]
})
export class ViewCartPageModule { }
