import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantHomeComponent } from './auth/tenant/tenant-home/tenant-home.component';
import { TenantAddComponent } from './auth/tenant/tenant-add/tenant-add.component';
import { TenantEditComponent } from './auth/tenant/tenant-edit/tenant-edit.component';
import { TenantViewComponent } from './auth/tenant/tenant-view/tenant-view.component';
import { NavComponent } from './nav/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TenantHomeComponent,
    TenantAddComponent,
    TenantEditComponent,
    TenantViewComponent,
    NavComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
