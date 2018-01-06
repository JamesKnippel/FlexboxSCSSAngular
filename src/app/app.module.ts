import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DocumentViewComponent } from './dashboard/document-view/document-view.component';
import { LandingComponent } from './dashboard/landing-component/landing-component.component';
import { HeaderNavComponent } from './dashboard/header-nav/header-nav.component';
import { SidebarNavComponent } from './dashboard/sidebar-nav/sidebar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DocumentViewComponent,
    LandingComponent,
    HeaderNavComponent,
    SidebarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
