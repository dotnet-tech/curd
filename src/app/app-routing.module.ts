import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantHomeComponent } from './auth/tenant/tenant-home/tenant-home.component';
import { TenantViewComponent } from './auth/tenant/tenant-view/tenant-view.component';
import { TenantAddComponent } from './auth/tenant/tenant-add/tenant-add.component';
import { TenantEditComponent } from './auth/tenant/tenant-edit/tenant-edit.component';

const routes: Routes = [
  // { path: 'tenant', component: TenantHomeComponent },
  {
    path: 'tenant',
    component: TenantHomeComponent,
    children: [
      { path: 'list', component: TenantViewComponent},
      { path: 'add', component: TenantAddComponent },
      { path: 'edit', component: TenantEditComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
