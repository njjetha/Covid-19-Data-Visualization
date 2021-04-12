import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import { HomeService } from './home/home.service';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { StateComponent } from './state/state.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StateComponent,
    NavbarComponent,
    DashboardCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ChartModule,
    Ng2GoogleChartsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
