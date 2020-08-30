import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GemComponent} from './components/dashboard/gem/gem.component';
import {MetalComponent} from './components/dashboard/metal/metal.component';
import {MakersComponent} from './components/dashboard/makers/makers.component';
import {JewelryMakingOrdersComponent} from './components/dashboard/jewelry-making-orders/jewelry-making-orders.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MatNativeDateModule} from '@angular/material/core';
import {NavbarComponent} from './components/dashboard/navbar/navbar.component';
import {SidebarComponent} from './components/dashboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GemComponent,
    MetalComponent,
    MakersComponent,
    JewelryMakingOrdersComponent,
    NotFoundComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
