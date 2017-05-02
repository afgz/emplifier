import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EmpItemComponent } from './emp-item/emp-item.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmployeeService } from './shared/services/employee.service';
import { LocationService } from './shared/services/location.service';
import { UIStateService } from './shared/services/ui-state.service';
import { ValidationService } from './shared/services/validation.service';
import { LocationFilterPipe } from './shared/pipes/location-filter.pipe';
import { LastnameSearchPipe } from './shared/pipes/lastname-search.pipe';
import { GenderFilterPipe } from './shared/pipes/gender-filter.pipe';
import { LastnameSortPipe } from './shared/pipes/lastname-sort.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';
import { lookupListToken, lookupLists } from './shared/providers';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpItemComponent,
    EmpDetailComponent,
    EmpFormComponent,
    LocationFilterPipe,
    LastnameSearchPipe,
    GenderFilterPipe,
    LastnameSortPipe,
    SearchBarComponent,
    NavbarComponent,
    FilterPanelComponent,
    SafeUrlPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule.forRoot()
  ],
  providers: [
    EmployeeService,
    LocationService,
    UIStateService,
    ValidationService,
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      DialogComponent,
  ]
})
export class AppModule { }
