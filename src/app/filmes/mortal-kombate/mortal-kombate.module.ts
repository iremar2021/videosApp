import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortalKombatePageRoutingModule } from './mortal-kombate-routing.module';

import { MortalKombatePage } from './mortal-kombate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortalKombatePageRoutingModule
  ],
  declarations: [MortalKombatePage]
})
export class MortalKombatePageModule {}
