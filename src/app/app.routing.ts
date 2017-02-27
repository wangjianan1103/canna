import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogComponent}      from './blog/blog.component';
import {HomeComponent} from './home/home.component'
import {ArticlesComponent} from './article/article.component'
import {ArticlesDetialComponent} from './article/article.detial.component'

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: ':id',
                component: HomeComponent
            }
        ]
    },
    {path: 'view/:id', component: BlogComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
