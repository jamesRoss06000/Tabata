import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import '@ionic/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { Insomnia } from '@ionic-native/insomnia';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'set-timer/:id', loadChildren: './set-timer/set-timer.module#SetTimerPageModule' },
  { path: 'countdown/:id', loadChildren: './countdown/countdown.module#CountdownPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }