import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CanteenComponent } from './canteen/canteen.component';
import { LostFoundComponent } from './lost-found/lost-found.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { CanteenAdminComponent } from './canteen-admin/canteen-admin.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { LostfoundComponent } from './lostfound/lostfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: CanteenComponent},
  {path:'testing', component: MenuComponent },
  {path: 'api', component: LostFoundComponent},
  {path: 'unique', component: CanteenAdminComponent},
  {path: 'events', component: AdminComponent},
  {path: 'ranking', component: EventDisplayComponent},
  {path: 'lostfound', component: LostfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
