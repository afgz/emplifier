import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdGridListModule, MdButtonModule, MdIconModule, MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EmpItemComponent } from './emp-item/emp-item.component';

import { EmployeeService } from './shared/services/employee.service';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpItemComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdGridListModule,
    MdButtonModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdCardModule,
    FlexLayoutModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
