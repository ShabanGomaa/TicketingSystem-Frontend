﻿import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//Layout
import { SidenavComponent } from './layout/sidenav';
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';

//services
import { SystemService } from './shared/SystemService';

//Routes
import { routes } from './app.route';

//Component 
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard';
import { Requester_DashboardComponent } from './requester/dashboard/requester_dashboard';

import { Requester_ProfileComponent } from './requester/profile/requester_profile';


import { LoginComponent } from './login/login.component';
import { Reset_PasswordComponent } from './login/reset_password';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(routes, { useHash: true }),
        FormsModule, ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule.forRoot()
    ],
    declarations: [AppComponent, SidenavComponent, HeaderComponent, FooterComponent, LoginComponent, DashboardComponent, Requester_DashboardComponent,
        Reset_PasswordComponent, PageNotFoundComponent, Requester_ProfileComponent
    ],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, AuthGuard, SystemService // without # url comes which is support html5 browser
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
