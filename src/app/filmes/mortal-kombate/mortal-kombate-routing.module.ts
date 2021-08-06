import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortalKombatePage } from './mortal-kombate.page';

const routes: Routes = [
  {
    path: '',
    component: MortalKombatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortalKombatePageRoutingModule {}
