import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule, ROUTES } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanteenComponent } from './canteen/canteen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import {MatButtonModule} from '@angular/material/button';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { CanteenAdminComponent } from './canteen-admin/canteen-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ServicesService } from './services.service';
import { EventDisplayComponent } from './event-display/event-display.component';
import { LostfoundComponent } from './lostfound/lostfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CanteenComponent,
    CalendarComponent,
    LostFoundComponent,
    AdminComponent,
    MenuComponent,
    CanteenAdminComponent,
    EventDisplayComponent,
    LostfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

