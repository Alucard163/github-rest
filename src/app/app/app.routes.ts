import { Route } from '@angular/router';

import { AuthorizedUserLayoutComponent } from "./authorized-user-layout/authorized-user-layout.component";
import { UnauthorizedUserLayoutComponent } from './unauthorized-user-layout/unauthorized-user-layout.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: AuthorizedUserLayoutComponent,
        children: [
            { path: 'table',  loadComponent: () => import('@github-rest/feature-users-list').then((c) => c.UsersListContainerComponent)},
            { path: 'detail/:id', loadComponent: () => import('@github-rest/feature-users-detail').then((c) => c.UsersDetailContainerComponent)},
            { path: 'blocks', loadComponent: () => import('@github-rest/feature-users-list').then((c) => c.UsersListContainerComponent)}
        ]
    },
    {path: '404', component: UnauthorizedUserLayoutComponent},
    {path: '**', redirectTo: '/404'}
];
