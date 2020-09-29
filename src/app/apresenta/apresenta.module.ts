import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApresentaPageRoutingModule } from './apresenta-routing.module';

import { ApresentaPage } from './apresenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApresentaPageRoutingModule
  ],
  declarations: [ApresentaPage]
})
export class ApresentaPageModule {}
