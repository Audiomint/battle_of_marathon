import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TacticsComponent } from './tactics/tactics.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TacticsComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
