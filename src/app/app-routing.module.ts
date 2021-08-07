import { WithOutSessionGuard } from './core/guard/with-out-session.guard';
import { SessionGuard } from './core/guard/session.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

//TODO: /auth ---> /login , /register
//TODO: /task --->
//TODO: ** 404

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth', //TODO: localhost/auth --> AuthRouting
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [WithOutSessionGuard]
  },
  {
    path: 'task',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule),
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
