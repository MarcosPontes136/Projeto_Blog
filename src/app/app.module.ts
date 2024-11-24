import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { FeedComponent } from './feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        FeedComponent,
        ContatoComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule], providers: [MatIconRegistry, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
