import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ShareModuleModule } from '../share-module/share-module.module';
import {Camera} from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    ShareModuleModule,
  ],
  declarations: [ProfilePage],
  providers: [
    Camera,
    Base64
  ],
})
export class ProfilePageModule {}
