import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdDialogModule, MdToolbarModule, MdGridListModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdSnackBarModule, MdMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EmpItemComponent } from './emp-item/emp-item.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpAddComponent } from './emp-add/emp-add.component';

import { EmployeeService } from './shared/services/employee.service';
import { LocationService } from './shared/services/location.service';
import { UIStateService } from './shared/services/ui-state.service';
import { LocationFilterPipe } from './shared/pipes/location-filter.pipe';
import { LastnameSearchPipe } from './shared/pipes/lastname-search.pipe';
import { GenderFilterPipe } from './shared/pipes/gender-filter.pipe';
import { LastnameSortPipe } from './shared/pipes/lastname-sort.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpItemComponent,
    EmpDetailComponent,
    EmpFormComponent,
    EmpAddComponent,
    LocationFilterPipe,
    LastnameSearchPipe,
    GenderFilterPipe,
    LastnameSortPipe,
    SearchBarComponent,
    DeleteDialogComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MdToolbarModule,
    MdGridListModule,
    MdButtonModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdCardModule,
    FlexLayoutModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule,
    MdDialogModule.forRoot()
  ],
  providers: [
    EmployeeService,
    LocationService,
    UIStateService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      DeleteDialogComponent,
  ]
})
export class AppModule { }
