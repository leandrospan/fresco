import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApresentaPage } from './apresenta.page';

const routes: Routes = [
  {
    path: '',
    component: ApresentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApresentaPageRoutingModule {}
