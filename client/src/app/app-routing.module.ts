import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpItemComponent } from './emp-item/emp-item.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpAddComponent } from './emp-add/emp-add.component';

const appRoutes: Routes = [
  { path: '', component: EmpItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
