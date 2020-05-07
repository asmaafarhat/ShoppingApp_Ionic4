import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareComponent} from '../share/share.component';
import {SharedFooterComponent} from '../shared-footer/shared-footer.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ShareComponent ,SharedFooterComponent],
  exports : [
    ShareComponent,SharedFooterComponent
  ],
  imports : [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ShareModuleModule { }
