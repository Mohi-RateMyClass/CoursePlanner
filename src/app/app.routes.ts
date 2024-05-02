import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { CourepathwayComponent } from './courepathway/courepathway.component';
import { ReviewComponent } from './review/review.component';
import { PollComponent } from './poll/poll.component';
import { PollreviewComponent } from './pollreview/pollreview.component';

const routeConfig: Routes = [
    {
        path: '',
        component: DetailsComponent,
        title: 'Home Page'
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
    },
    {
        path: 'review',
        component : ReviewComponent,
    },
    {
        path: 'poll',
        component : PollComponent,
    },{
        path: 'pollreview',
        component : PollreviewComponent,
    }

];

export default routeConfig;