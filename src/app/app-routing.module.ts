import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GemComponent} from './components/dashboard/gem/gem.component';
import {MetalComponent} from './components/dashboard/metal/metal.component';
import {MakersComponent} from './components/dashboard/makers/makers.component';
import {JewelryMakingOrdersComponent} from './components/dashboard/jewelry-making-orders/jewelry-making-orders.component';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'gem', component: GemComponent, canActivate: [AuthGuard]},
  {path: 'metal', component: MetalComponent, canActivate: [AuthGuard]},
  {path: 'makers', component: MakersComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: JewelryMakingOrdersComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
