import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsShoesPageRoutingModule } from './kids-shoes-routing.module';

import { KidsShoesPage } from './kids-shoes.page';
import { ShareModuleModule } from '../share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsShoesPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [KidsShoesPage]
})
export class KidsShoesPageModule {}
