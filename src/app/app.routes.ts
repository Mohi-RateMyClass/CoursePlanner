import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { CourepathwayComponent } from './courepathway/courepathway.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'detail',
        component: DetailsComponent,
        title: 'Detail Page'
    },
    {
        path: '*',
        component: AppComponent,
        title: 'Home Page'
    },
    {
        path: 'pathway',
        component: CourepathwayComponent,
        title: 'Course Pathways'
    }

];

export default routeConfig;