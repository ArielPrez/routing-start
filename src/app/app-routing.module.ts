import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]},
    { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: {sRver: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `HomeComponent`
    { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }  // Wildcard route for a 404 page
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    // Understanding Location Strategies: Old technique for the support in very old browsers,
    //  and to make sure the web server returns the index.html file, use (usehash) tag in the route.
      // RouterModule.forRoot(appRoutes,{useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
