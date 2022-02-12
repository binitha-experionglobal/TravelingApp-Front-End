import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './shared/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TravelerlistComponent } from './admin/travelerlist/travelerlist.component';
import { TravelerService } from './shared/traveler.service';
import { DelhiairportComponent } from './admin/delhiairport/delhiairport.component';
import { NameaComponent } from './admin/namea/namea.component';
import { UserComponent } from './user/user.component';
import { FlightdataComponent } from './flightdata/flightdata.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    TravelerlistComponent,
    DelhiairportComponent,
    NameaComponent,
    UserComponent,
    FlightdataComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [AuthService,
    TravelerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
