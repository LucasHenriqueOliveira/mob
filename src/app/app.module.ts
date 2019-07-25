import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecuperaCadunicoService } from './services/recupera-cadunico.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadunicoComponent } from './components/cadunico/cadunico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CadunicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnotifyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    RecuperaCadunicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
