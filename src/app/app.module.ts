import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { InformationComponent } from './components/information/information.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { SharedService} from './shared.service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerListComponent } from './components/customer/list/customer-list/customer-list.component';
import { CustomerAddEditComponent } from './components/customer/add-edit/customer-add-edit/customer-add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    InformationComponent,
    AddEditComponent,
    CustomerListComponent,
    CustomerAddEditComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
